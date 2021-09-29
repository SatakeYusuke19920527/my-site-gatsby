import React from "react"
import "../styles/style.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main
        className="layout-body"
      >{children}</main>
      <Footer />
    </div>
  );
}

export default Layout