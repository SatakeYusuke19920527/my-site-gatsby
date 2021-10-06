import React from "react"
import Button from '@mui/material/Button';
import {navigate} from 'gatsby'
import "../styles/style.css"

export default function Hero() {
    const moveToContact = () => {
        navigate('/contact/')
    }
    return (
        <section className="hero">
            <h1 className="hero-text">
                Hello Tech, <br />Hello Brand new myself.
            </h1>
            <div className="hero-author">
                <p className="hero-author-text">
                    自分自身に驚く準備はできましたか？
                </p>
            </div>
            <div className="btn-area">
                <Button
                    variant="outlined"
                    color="error"
                    onClick={moveToContact}
                >
                    お問い合わせはこちら
                </Button>
            </div>
        </section>
    );
}