import { Bars4Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){

    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className=" px-4  py-4 bg-colour">
        <nav className=" hidden md:block  "> 
        <ul className=" justify-center flex text-white font-josefin-sans font-medium">
            <li><a href="#">Home</a></li>
            <li><a herf="#">Skills</a></li>
            <li><a herf="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>


        <button onClick={ () => setToggleMenu(!toggleMenu)} className="ml-auto text-white block md:hidden ">
            <Bars4Icon className="h-5" />

        </button>
       { toggleMenu && ( <div className="mobile-nav">
        <ul className=" flex flex-col text-black font-josefin-sans font-medium  p-4 space-y-4 ">
            <li><a href="#" onClick={ () => toggleMenu(false)}>Home</a></li>
            <li><a herf="#" onClick={ () => toggleMenu(false)}>Skills</a></li>
            <li><a herf="#" onClick={ () => toggleMenu(false)}>Projects</a></li>
            <li><a href="#" onClick={ () => toggleMenu(false)}>Contact</a></li>
        </ul>
        <button  onClick={ () => setToggleMenu(false)} className=" absolute top-4 right-4   text-black text-sm ">
            X
        </button>

        </div> )}
        </header>
}