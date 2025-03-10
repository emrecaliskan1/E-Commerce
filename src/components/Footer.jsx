import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import logo from '../images/logo2.png'

const Footer = () => {
    return (
        <>
            <footer className="w-full bg-primary">
                <div className="container text-white flex flex-col md:flex-row justify-between items-center py-4 gap-4 text-center md:text-left font-serif">
                    {/* Logo ve Başlık */}
                    
                    <div style={{display:"flex",flexDirection:"row"}}>
                    <img style={{width:"50px",height:"50px",marginTop:"13px"}}
                            src={logo}
                            alt="Çalışkanlar Market"/>
                        <h1  style={{marginLeft:"15px",fontFamily:"arial",color:"darkblue"}}>Çalışkanlar Market</h1>
                       
                    </div>

                    {/* Tel Bilgisi */}
                    <p className="text-sm">
                        <a href="tel:+905555555555">
                            Emre Çalışkan © 2025
                        </a>
                    </p>

                    {/* Sosyal Medya İkonları */}
                    <div>
                        <FaFacebookF style={{marginRight:"10px"}}/>
                        <FaLinkedinIn style={{marginRight:"10px"}} />
                        <FaInstagram style={{marginRight:"10px"}} />
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer