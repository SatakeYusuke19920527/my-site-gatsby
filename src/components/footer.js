// src/components/footer.js
import React from "react"
import "../styles/style.css"

export default function Footer() {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} ProAca Tech.
        </footer>
    )
}