import { Github, Linkedin } from 'lucide-react';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-5 h-15 shadow-sm sticky">
            <div className="flex items-center gap-5 justify-center">
                <h1 className="text-2xl font-bold ml-10">Nimit Gupta</h1>
            </div>

            <ul className="flex gap-7 items-center justify-center font-bold text-lg">
                <li className="hover:scale-110">
                    <a href="#about">About</a>
                </li>
                <li className="hover:scale-110">
                    <a href="#skills">Skills</a>
                </li>
                <li className="hover:scale-110">
                    <a href="#projects">Projects</a>
                </li>
                <li className="hover:scale-110">
                    <a href="#projects">Resume</a>
                </li>
                <div className="flex gap-5">
                    <button className="p-1 rounded-sm cursor-pointer hover:text-white hover:bg-black">
                        <a href='https://github.com/Nimit746' target='_Black'><Github /></a>
                    </button>
                    <button className="cursor-pointer hover:text-blue-600">
                        <a href='https://www.linkedin.com/in/nimit-gupta-482734285?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BkG1ncpx%2FRWi9jvAOM%2FSVcQ%3D%3D' target='_Black'><FaLinkedin size={27} /></a>
                    </button>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar
