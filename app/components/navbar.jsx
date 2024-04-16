import React from "react";
import Image from "next/image"; 
import "../../styles/component_Style/navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
                <a>
                    <Image src="" alt="Logo" height={50} width={50}/>
                </a>
            <div className="navbarLinks">
                    <a>Login</a>
                    <a>Register</a>
            </div>
        </div>
    );
}

export default Navbar;