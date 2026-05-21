import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#efefef]/95 backdrop-blur-md shadow-lg border-b border-gray-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LOGO + IMAGE */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-4 border-[#f5b932] shadow-md flex-shrink-0">
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

        {/* DESKTOP NAV LINKS */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 uppercase text-sm font-bold tracking-widest">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skill" className="nav-link">Skills</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        {/* HIRE ME BUTTON (desktop) */}
        <a
          href="#contact"
          className="hidden md:block bg-[#f5b932] text-black px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-black hover:text-white transition duration-300"
        >
          Hire Me
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-2xl font-bold p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#efefef] border-t border-gray-200 px-4 py-4 space-y-3">
          {["home", "about", "education", "projects", "skill", "contact"].map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => setMenuOpen(false)}
              className="block uppercase text-sm font-bold tracking-widest text-black hover:text-[#f5b932] transition duration-300 py-2 border-b border-gray-100 last:border-b-0"
            >
              {link === "skill" ? "Skills" : link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 text-center bg-[#f5b932] text-black px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-black hover:text-white transition duration-300"
          >
            Hire Me
          </a>
        </div>
      )}

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
        `}
      </style>

    </nav>
  );
}

export default Navbar;