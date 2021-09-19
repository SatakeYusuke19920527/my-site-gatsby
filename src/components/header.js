import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"

export default function Header() {
  return (
    <header className="header-background">
      <nav>
        <ol className="left">
          <li>
            <h1>
              <Link to="/" className="header-link">
                ProAca
              </Link>
            </h1>
          </li>
        </ol>
        <ol  className="right">
          <li>
            <h1>
              <Link to="/about" className="header-link">
                ABOUT
              </Link>
            </h1>
          </li>
          <li>
            <h1>
              <Link to="/blog" className="header-link">
                BLOG
              </Link>
            </h1>
          </li>
          <li>
            <h1 className="login">
                LOGIN
            </h1>
          </li>
        </ol>
      </nav>
    </header>
  );
}