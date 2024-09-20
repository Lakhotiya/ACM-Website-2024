import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types"; 
import { useState } from "react";
import { useEffect } from "react";
export default function Footer() {
    return (
        <>
    <div className="footer" >
	    <div className="waves">
			<div className="wave1" ></div>
			<div className="wave2" ></div>
			<div className="wave3" ></div>
			<div className="wave4" ></div>
		</div>
	<Link to="/Home" className="logo">
            <img src="/acm_logo_white.png" alt="ACM Logo" 
			style={{height:"10rem"}}
			/>
	</Link>
	<ul class="menu"
	style={{marginLeft:"20%"}}
	>
		<li className="menu__item" style={{fontSize:"2rem",fontWeight:"bold"}}>Visit Us</li>
		<li className="menu__item">UPES Energy Acres,</li>
		<li className="menu__item">Bidholi,</li>
		<li className="menu__item">Dehradun-248007, Uttarakhand, India</li>
	</ul>
	<ul class="menu"
	style={{marginLeft:"17%"}}
	>
		<li className="menu__item" style={{fontSize:"2rem",fontWeight:"bold"}}>Connect With Us</li>
		
		<ul class="menu" style={{ marginLeft: "17%" }}>
    {/* <li className="menu__item" style={{ fontSize: "2rem", fontWeight: "bold" }}>Connect With Us</li> */}
    <ul class="menu2">
        <a href="https://www.instagram.com/upesacm/" target="_blank" rel="noopener noreferrer" className="logo">
            <img src="/instagram.png" alt="Instagram" style={{ height: "3rem", margin: "0 20px 0 20px" }} />
        </a>
        <a href="https://www.linkedin.com/company/upesacm/" target="_blank" rel="noopener noreferrer" className="logo">
            <img src="/linkedin.png" alt="LinkedIn" style={{ height: "3rem", margin: "0 20px 0 20px" }} />
        </a>
        <a href="https://github.com/upesacm" target="_blank" rel="noopener noreferrer" className="logo">
            <img src="/github.png" alt="GitHub" style={{ height: "3rem", margin: "0 20px 0 20px" }} />
        </a>
    </ul>
</ul>

	</ul>
    </div>
        </>
    )
}