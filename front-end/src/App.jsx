import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/base.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Dashboard } from "./components/dashboard/Dashboard";
// import { Contact } from './components/contact/Contact'
import About from "./components/about/About";
import { Pagenotfound } from "./components/Pagenotfound";
import { Signup } from "./components/signup/Signup";
import { Login } from "./components/login/Login";
import { Addblog } from "./components/addblog/Addblog";
import TributePage from "./components/dashboard/TributePage";
import Contact from "./components/contact/Contact";
import JEE from "./components/Exams/JEE";
import SSC from "./components/Exams/SSC";
import NEET from "./components/Exams/NEET";
import UPSC from "./components/Exams/UPSC";
import LLB from "./components/Exams/LLB";
import BookStore from "./components/BookStore/BookStore";
import TodoApp from "./components/Todoapp/TodoApp";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/jee" element={<JEE />} />
          <Route path="/ssc" element={<SSC />} />
          <Route path="/neet" element={<NEET />} />
          <Route path="/upsc" element={<UPSC />} />
          {<Route path="/llb" element={<LLB />} />}
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/tribute-page" element={<TributePage />} />
          <Route path="/book-store" element={<BookStore />} />
          <Route path="/todo-app" element={<TodoApp />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-blog" element={<Addblog />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
