import React from "react";

function Project() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#dcdcdc] flex items-center justify-center px-6 py-20"
    >

      {/* MAIN CONTAINER */}
      <div className="bg-[#efefef] w-full max-w-7xl shadow-2xl px-8 md:px-20 py-16">

        {/* TITLE */}
        <div className="flex items-center gap-6 mb-16">

          <div className="w-16 h-[4px] bg-[#f5b932]"></div>

          <h1 className="text-5xl md:text-7xl font-black uppercase text-black tracking-wide">
            Projects
          </h1>

        </div>

        {/* PROJECT CARD */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            <div>

              <p className="uppercase tracking-[4px] text-[#f5b932] font-bold mb-3">
                Featured Project
              </p>

              <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
                StyleSync
              </h2>

              <p className="text-gray-600 leading-9 text-lg">
                StyleSync is a modern fashion and outfit management
                web application that helps users explore trendy styles,
                organize outfits and get fashion inspiration easily.
                The project is designed with a stylish and responsive
                user interface using modern frontend technologies.
              </p>

            </div>

            {/* FEATURES */}
            <div>

              <h3 className="text-2xl font-bold text-black mb-5">
                Key Features
              </h3>

              <div className="space-y-3 text-gray-700">

                <p>✔ Trendy Outfit Collections</p>
                <p>✔ Responsive Design</p>
                <p>✔ User-Friendly Interface</p>
                <p>✔ Fashion Inspiration</p>
                <p>✔ Easy Navigation</p>

              </div>

            </div>

            {/* TECH STACK */}
            <div>

              <h3 className="text-2xl font-bold text-black mb-5">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-4">

                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">React.js</span>
                <span className="tech-badge">Tailwind CSS</span>

              </div>

            </div>

            {/* BUTTON */}
            <div className="pt-4">

              <a
                href="https://www.stylecync.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-4 rounded-full uppercase font-bold tracking-wide hover:bg-[#f5b932] hover:text-black transition duration-300"
              >
                View Project
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            {/* BACKGROUND BOX */}
            <div className="absolute top-8 left-8 w-full h-full bg-[#f5b932] rounded-3xl"></div>

            {/* IMAGE */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="project"
                className="w-full h-[500px] object-cover hover:scale-105 transition duration-500"
              />

            </div>

          </div>

        </div>

      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          .tech-badge {
            background: black;
            color: white;
            padding: 12px 22px;
            border-radius: 9999px;
            font-weight: 700;
            transition: 0.3s;
          }

          .tech-badge:hover {
            background: #f5b932;
            color: black;
            transform: scale(1.05);
          }
        `}
      </style>

    </section>
  );
}

export default Project;