import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Header } from './components/header/Header'
// import { Slidebar } from './components/slidebar/slidebar'
import Footer  from './components/footer/Footer'
import { Dashboard } from './components/dashboard/Dashboard'
// import { Contact } from './components/contact/Contact'
import  About  from './components/about/About'
import { Pagenotfound } from './components/Pagenotfound'
import { Signup } from './components/signup/Signup'
import { Login } from './components/login/Login'
import { Addblog } from './components/addblog/Addblog'
import TributePage from './components/dashboard/TributePage'
import Contact from './components/contact/Contact';
import JEE from "./components/Exams/JEE";
import SSC from "./components/Exams/SSC";
import NEET from "./components/Exams/NEET";
import UPSC from "./components/Exams/UPSC";
import LLB from "./components/Exams/LLB";





function App() {
  

  return (
    <BrowserRouter>
      <Header/>
       {/* <Slidebar /> */}
        <Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/jee" element={<JEE />} />
  <Route path="/ssc" element={<SSC />} />
  <Route path="/neet" element={<NEET />} />
  <Route path="/upsc" element={<UPSC />} />
  { <Route path="/llb" element={<LLB />} /> }
  <Route path="/about-us" element={<About />} />
  <Route path="/contact-us" element={<Contact />} />
  <Route path="/Tribute-Page" element={<TributePage />} />
  <Route path="/sign-up" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/add-blog" element={<Addblog />} />
  <Route path="*" element={<Pagenotfound />} />
</Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
