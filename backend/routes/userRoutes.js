var express = require('express');
var router = express.Router();
var user=require("../models/User");

/* for password hasing concept */
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* For jwt auth*/
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.JWT_SECRET;

router.post("/users",async(req,res)=>{
    // console.log(req.body);
    // console.log(req.body.name);
     console.log(req.body);

  const { name, email, mobile, password } = req.body;

  /*   Check duplicate email  ----------------------- */
  const emailExists = await user.findOne({ email });
  if (emailExists) {
    return res.status(400).json({
      success: false,
      message: "Email already registered",
    });
  }

  /*  Check duplicate mobile  ---------------------- */
  const mobileExists = await user.findOne({ mobile });
  if (mobileExists) {
    return res.status(400).json({
      success: false,
      message: "Mobile already registered",
    });
  }

  /*   Everything OK, create new user --------------- */
  const hash = bcrypt.hashSync(password, saltRounds);
  //   console.log(hash);

  const data = await user.create({ name, email, mobile, password: hash });

  return res.status(201).json({
    success: true,
    message: "Sign‑up successfully!",
    userId: data._id,
  });
    
    
})

router.post("/login",async(req,res)=>{
  // console.log(req.body);
  // console.log(req.body.username);
  // console.log(req.body.password);
   try {
    const { username, password } = req.body;

    //  Find user by email
    const userRecord = await user.findOne({ email: username });

    if (!userRecord) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    //  Compare password
    const isPasswordValid = bcrypt.compareSync(password, userRecord.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    //  Prepare JWT payload (only send essential fields)
    const payload = {
      _id: userRecord._id,
      name: userRecord.name,
      email: userRecord.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET || 'devSecret', {
      expiresIn: '6h',
    });

    //  Return token + user (safe fields only)
    return res.status(201).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        _id: userRecord._id,
        name: userRecord.name,
        email: userRecord.email,
      },
    });

  } catch (err) {
    console.error('Login Error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
  

})


module.exports = router;