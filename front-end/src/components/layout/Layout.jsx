import React from "react";
import "./Layout.css";
import { Header } from "../header/Header";
import Footer from "../footer/Footer";

export function Layout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-content">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
