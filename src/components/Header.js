import { useState, useEffect, useRef } from 'react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';

// The three navigation links you need
const navLinks = [
  { href: '#Content', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on 'Escape' key press for better UX
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menuButton = document.getElementById('menu-button');
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !menuButton?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    // STYLE CHANGE: Changed bg-gray-800 to bg-transparent.
    // To get the dark background from your image, you could use `bg-black`
    // or a custom color like `bg-[#2f3441]`
    <header className="fixed top-0 right-0 p-4 z-50">

      {/* Mobile Menu Button - always visible on the top right */}
      <button
        id="menu-button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMenuOpen ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars4Icon className="h-8 w-8" />
        )}
      </button>

      {/* 
        Mobile Navigation Menu (the part that slides in)
        This is hidden by default and appears when isMenuOpen is true.
      */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="navigation"
        aria-hidden={!isMenuOpen}
      >
        {/* Navigation links inside the slide-out menu */}
        <ul className="flex flex-col text-black font-josefin-sans font-medium p-8 mt-10 space-y-6">
          {navLinks.map((link) => (
            <li key={`mobile-${link.label}`}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
                className="text-xl hover:text-cyan-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}