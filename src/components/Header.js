import { Bars4Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="px-4 py-4 bg-colour">
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="justify-center flex text-white font-josefin-sans font-medium">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#Content">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="ml-auto text-white block md:hidden"
        aria-label="Toggle menu"
      >
        <Bars4Icon className="h-5" />
      </button>

      {/* Mobile Navigation */}
      {toggleMenu && (
        <div className="mobile-nav absolute top-0 right-0 w-3/4 bg-white shadow-lg z-50">
          <ul className="flex flex-col text-black font-josefin-sans font-medium p-4 space-y-4">
            <li>
              <a href="/" onClick={() => setToggleMenu(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#Content" onClick={() => setToggleMenu(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setToggleMenu(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setToggleMenu(false)}>
                Projects
              </a>
            </li>
          </ul>
          <button
            onClick={() => setToggleMenu(false)}
            className="absolute top-4 right-4 text-black text-sm"
            aria-label="Close menu"
          >
            X
          </button>
        </div>
      )}
    </header>
  );
}