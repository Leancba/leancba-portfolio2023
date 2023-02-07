import React , { useRef, useState } from "react";



export default function Navbar() {

  const navRef = useRef();
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  
  const navToggle = () => {
	navRef.current.classList.toggle("responsive_nav");
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };



	window.onscroll = function() {
		if (document.documentElement.scrollTop > 50) {
			document.getElementById("navbar").style.height = "50px";
			document.getElementById("nav").style.top = "50px";
			
			
		} else {
			document.getElementById("navbar").style.height = "";
			document.getElementById("nav").style.top = "";
		}
	}

	return (
		<section className="nav-bar" id="navbar" >	
				<nav className="nav-menu" ref={navRef} id="nav" >
					<ul className="nav-ul">
						<li>
							<a onClick={navToggle} href="#home">Home</a> 
						</li>
						<li>
							<a onClick={navToggle} href="#about">About me</a> 
						</li>
						
						<li>
							<a onClick={navToggle} href="#portfolio">Projects</a>
						</li>
						<li>
							<a onClick={navToggle} href="#skills">Skills</a>
						</li>
						<li >
							<a onClick={navToggle} href="#education">Education</a>
						</li>
						<li>
							<a onClick={navToggle} href="#resume">Experience</a>
						</li>
					</ul>
				</nav>
				<div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
		</section>
	);
}

