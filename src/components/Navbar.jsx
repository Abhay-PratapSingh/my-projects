import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav
      className="
        fixed top-0 left-0 w-full h-20 z-50
        flex items-center py-4 px-8 gap-4
        bg-[#fffaf4]
        shadow-sm
        border-b border-[#eadfce]
      "
    >
      {/* Logo / Brand */}
      <div className="flex items-center px-4">
        <h1 className="text-2xl font-serif text-[#c8a45d] tracking-wide whitespace-nowrap">
          Pradeep Jewellers
        </h1>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden ml-auto text-2xl text-[#6b4f2c]"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul
        className={`
          absolute top-20 left-0 w-full
          bg-[#fffaf4]/80 backdrop-blur-md shadow-lg
          flex flex-col items-center gap-6
          text-lg font-medium

          overflow-hidden
          transition-all duration-1000 ease-in-out
          ${menuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'}

          md:static md:flex md:flex-row
          md:justify-between md:items-center
          md:w-full md:pl-16
          md:bg-transparent md:backdrop-blur-none md:shadow-none
          md:max-h-none md:opacity-100 md:py-0 md:overflow-visible
        `}
      >
        <li>
          <Link to="/" className="relative font-serif text-[#6b4f2c] hover:text-[#c8a45d] transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[#c8a45d] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" className="relative font-serif text-[#6b4f2c] hover:text-[#c8a45d] transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[#c8a45d] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
            About Us
          </Link>
        </li>

        <li>
          <Link to="/collection" className="relative font-serif text-[#6b4f2c] hover:text-[#c8a45d] transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[#c8a45d] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
            Collection
          </Link>
        </li>

        <li>
          <Link to="/contact" className="relative font-serif text-[#6b4f2c] hover:text-[#c8a45d] transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[1.5px] after:w-0 after:bg-[#c8a45d] after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
