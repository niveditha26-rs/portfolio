import React from "react";

function Project() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#dcdcdc] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20"
    >

      {/* MAIN CONTAINER */}
      <div className="bg-[#efefef] w-full max-w-7xl shadow-2xl px-5 sm:px-8 md:px-20 py-10 sm:py-16 rounded-xl overflow-hidden">

        {/* TITLE */}
        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16">

          <div className="w-10 sm:w-16 h-[4px] bg-[#f5b932]"></div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase text-black tracking-wide">
            Projects
          </h1>

        </div>

        {/* PROJECT SECTION */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-8 order-2 md:order-1">

            {/* PROJECT INFO */}
            <div>

              <p className="uppercase tracking-[4px] text-[#f5b932] font-bold mb-3 text-sm sm:text-base">
                Featured Project
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6">
                StyleSync
              </h2>

              <p className="text-gray-600 leading-8 sm:leading-9 text-base sm:text-lg">
                StyleSync is a modern fashion and outfit management
                web application that helps users explore trendy styles,
                organize outfits and get fashion inspiration easily.
                The project is designed with a stylish and responsive
                user interface using modern frontend technologies.
              </p>

            </div>

            {/* FEATURES */}
            <div>

              <h3 className="text-xl sm:text-2xl font-bold text-black mb-5">
                Key Features
              </h3>

              <div className="space-y-3 text-gray-700 text-sm sm:text-base">

                <p>✔ Trendy Outfit Collections</p>
                <p>✔ Responsive Design</p>
                <p>✔ User-Friendly Interface</p>
                <p>✔ Fashion Inspiration</p>
                <p>✔ Easy Navigation</p>

              </div>

            </div>

            

            {/* TECH STACK */}
            <div>

              <h3 className="text-xl sm:text-2xl font-bold text-black mb-5">
                Technologies Used
              </h3>

              <div className="flex flex-wrap gap-3 sm:gap-4">

                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">React.js</span>
                <span className="tech-badge">Tailwind CSS</span>

              </div>

            </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-6">
                Coastal Tourism
              </h2>
            <div>

              <h3 className="text-xl sm:text-2xl font-bold text-black mb-5">
                Solution
              </h3>

              <p className="text-gray-600 leading-8 sm:leading-9 text-base sm:text-lg">
                The proposed solution is a district-based digital platform that
                connects tourists with local coastal services such as guides,
                homestays and activities. It improves visibility for small tourism
                operators and provides a centralized system for users. The platform
                uses Artificial Intelligence for personalized recommendations,
                translation and route planning.
              </p>

            </div>

            {/* WORKING */}
            <div>

              <h3 className="text-xl sm:text-2xl font-bold text-black mb-5">
                Working
              </h3>

              <p className="text-gray-600 leading-8 sm:leading-9 text-base sm:text-lg">
                The system organizes services district-wise, allowing users to find
                nearby options easily. Tourists can search, view and book services
                through the platform. AI analyzes user preferences to suggest
                suitable activities and services. It also provides translation
                support and GPS navigation. Service providers can register and list
                their services, making them accessible to more users.
              </p>

            </div>

            {/* BUTTON */}
            <div className="pt-2 sm:pt-4">

              <a
                href="https://www.stylecync.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full uppercase font-bold tracking-wide hover:bg-[#f5b932] hover:text-black transition duration-300 hover:scale-105 text-sm sm:text-base"
              >
                View Project
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative order-1 md:order-2 flex justify-center">

            {/* BACKGROUND BOX */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-8 w-full h-full bg-[#f5b932] rounded-3xl"></div>

            {/* IMAGE */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl w-full">

              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="project"
                className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-cover hover:scale-105 transition duration-500"
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
            padding: 10px 20px;
            border-radius: 9999px;
            font-weight: 700;
            transition: 0.3s;
            font-size: 14px;
          }

          .tech-badge:hover {
            background: #f5b932;
            color: black;
            transform: scale(1.05);
          }

          @media (max-width: 640px) {
            .tech-badge {
              padding: 8px 16px;
              font-size: 12px;
            }
          }
        `}
      </style>

    </section>
  );
}

export default Project;