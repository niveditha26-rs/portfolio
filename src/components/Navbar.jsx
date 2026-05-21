import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#efefef]/95 backdrop-blur-md shadow-lg border-b border-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO + IMAGE */}
        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-[#f5b932] shadow-md">

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
              alt="profile"
              className="w-full h-full object-cover"
            />

          </div>

          <h1 className="text-2xl font-black uppercase tracking-wider text-black">
            Niveditha
          </h1>

        </div>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 uppercase text-sm font-bold tracking-widest">

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

        {/* BUTTON */}
        <a
          href="#contact"
          className="hidden md:block bg-[#f5b932] text-black px-6 py-3 rounded-full font-bold uppercase text-sm hover:bg-black hover:text-white transition duration-300"
        >
          Hire Me
        </a>

        {/* MOBILE MENU */}
        <div className="md:hidden text-3xl font-bold">
          ☰
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
        `}
      </style>

    </nav>
  );
}

export default Navbar;