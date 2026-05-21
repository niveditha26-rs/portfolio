import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#efefef]/95 backdrop-blur-md shadow-lg border-b border-gray-300">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between">

        {/* LOGO + IMAGE */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-4 border-[#f5b932] shadow-md">

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
              alt="profile"
              className="w-full h-full object-cover"
            />

          </div>

          <h1 className="text-lg sm:text-2xl font-black uppercase tracking-wider text-black">
            Niveditha
          </h1>

        </div>

        {/* DESKTOP NAVBAR */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 uppercase text-sm font-bold tracking-widest">

          <a href="#home" className="nav-link">
            Home
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#education" className="nav-link">
            Education
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#skill" className="nav-link">
            Skills
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>

        </div>

        {/* DESKTOP BUTTON */}
        <a
          href="#contact"
          className="hidden md:block bg-[#f5b932] text-black px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-black hover:text-white transition duration-300 hover:scale-105"
        >
          Hire Me
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-[#efefef] overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-[500px] py-4 border-t border-gray-300" : "max-h-0"
        }`}
      >

        <div className="flex flex-col items-center gap-5 uppercase text-sm font-bold tracking-widest">

          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="mobile-link"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="mobile-link"
          >
            About
          </a>

          <a
            href="#education"
            onClick={() => setMenuOpen(false)}
            className="mobile-link"
          >
            Education
          </a>

          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="mobile-link"
          >
            Projects
          </a>

          <a
            href="#skill"
            onClick={() => setMenuOpen(false)}
            className="mobile-link"
          >
            Skills
          </a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mobile-link"
          >
            Contact
          </a>

          {/* MOBILE BUTTON */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#f5b932] text-black px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-black hover:text-white transition duration-300"
          >
            Hire Me
          </a>

        </div>

      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          .nav-link {
            position: relative;
            color: black;
            transition: 0.3s;
          }

          .nav-link:hover {
            color: #f5b932;
          }

          .nav-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 0%;
            height: 3px;
            background: #f5b932;
            transition: 0.3s;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .mobile-link {
            color: black;
            transition: 0.3s;
          }

          .mobile-link:hover {
            color: #f5b932;
            transform: scale(1.05);
          }
        `}
      </style>

    </nav>
  );
}

export default Navbar;