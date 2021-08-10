// src/components/header.js
import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"

export default function Header() {
  return (
    <header className="header-background">
      <Link to="/" className="header-link">
        <h1>
          ProAca Web Site
        </h1>      
      </Link>
    </header>
  );
}