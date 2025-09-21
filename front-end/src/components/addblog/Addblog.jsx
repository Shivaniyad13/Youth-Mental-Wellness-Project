import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';

export const Addblog = () => {
  const [cate,setCate]=useState([])
 const [blog, setBlog] = useState({
    b_cate_name: '',
    b_title: '',
    b_author: '',
    b_desc: '',
    b_pic: null
  });
  
   const getAllCategoery=async()=>{
    const cateRes=await axios.get("http://localhost:4004/api/categories")
    console.log(cateRes);
    setCate(cateRes.data.categories)
    
  }

  const uploadData=()=>{

  }

  const handler=()=>{

  }

  const handleBlogPost=async()=>{

  }

  useEffect(()=>{
getAllCategoery();
  },[])
  return (
     <>
      <Toaster />
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            
           <form className="blog-form p-4 shadow-lg rounded-4 bg-white" onSubmit={handleBlogPost}>
                <h3 className="mb-4 text-center fw-bold">Enter Blog</h3>
              <div className="mb-3">
                <label htmlFor="category" className="form-label fw-semibold">
                  Category
                </label>
                <select name="" id="" className='form-control'>
                  <option value="">------ Select categoery -------</option>
                  {
                    cate.map((c,i)=>
                      <option value="">{c}</option>
                    )
                  }
                </select>
              
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label fw-semibold">
                  Blog Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Blog Title"
                  name="b_title"
                  onChange={handler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label fw-semibold">
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Blog Author "
                  name="b_author"
                  onChange={handler}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="b_desc" className="form-label fw-semibold">
                  Enter Minimum 150 Characters
                </label>
                <textarea
                  name="b_desc"
                  placeholder="Enter Blog Description"
                  className="form-control"
                 
                  required
                   rows="6"
                   onChange={handler}  
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="subtitle" className="form-label fw-semibold">
                  Upload Blog Picture
                </label>
                <input
                  type="file"
                  className="form-control"
                  onChange={uploadData}
                />
              </div>
              <button type="submit" className="btn btn-primary w-10">
                Publish Blog
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  )
}
