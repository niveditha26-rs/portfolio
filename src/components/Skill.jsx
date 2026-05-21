import React from "react";

function Skill() {
  return (
    <section
      id="skill"
      className="min-h-screen bg-[#dcdcdc] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20"
    >

      {/* MAIN CONTAINER */}
      <div className="bg-[#efefef] w-full max-w-7xl shadow-2xl rounded-xl px-5 sm:px-8 md:px-20 py-10 sm:py-16 overflow-hidden">

        {/* TITLE */}
        <div className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-16">

          <div className="w-10 sm:w-16 h-[4px] bg-[#f5b932]"></div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase text-black tracking-wide">
            Skills
          </h1>

        </div>

        {/* INTRO */}
        <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 max-w-4xl mb-12 sm:mb-16">
          I have built strong knowledge in frontend development,
          programming and UI design with practical experience in
          creating responsive modern websites.
        </p>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">

          {/* CARD 1 */}
          <div className="skill-card">

            <div className="skill-icon">
              💻
            </div>

            <div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-3 sm:mb-4">
                Web Development
              </h2>

              <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                HTML, CSS, Tailwind CSS, JavaScript and React.js
              </p>

            </div>

          </div>

          {/* CARD 2 */}
          <div className="skill-card">

            <div className="skill-icon">
              🐍
            </div>

            <div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-3 sm:mb-4">
                Programming
              </h2>

              <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                C Programming, Python and problem solving
              </p>

            </div>

          </div>

          {/* CARD 3 */}
          <div className="skill-card">

            <div className="skill-icon">
              🗄️
            </div>

            <div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-3 sm:mb-4">
                Database
              </h2>

              <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                SQL and database management fundamentals
              </p>

            </div>

          </div>

          {/* CARD 4 */}
          <div className="skill-card">

            <div className="skill-icon">
              🎨
            </div>

            <div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-3 sm:mb-4">
                UI Design
              </h2>

              <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                Clean layouts, responsive design and user-friendly interfaces
              </p>

            </div>

          </div>

        </div>

        {/* BOTTOM SKILLS */}
        <div className="mt-14 sm:mt-20">

          <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-6 sm:mb-8">
            Core Skills
          </h2>

          <div className="flex flex-wrap gap-3 sm:gap-5">

            <span className="skill-badge">
              React.js
            </span>

            <span className="skill-badge">
              Tailwind CSS
            </span>

            <span className="skill-badge">
              Responsive Design
            </span>

            <span className="skill-badge">
              Problem Solving
            </span>

            <span className="skill-badge">
              UI Development
            </span>

            <span className="skill-badge">
              Frontend Development
            </span>

          </div>

        </div>

      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          .skill-card {
            background: white;
            padding: 24px;
            border-radius: 24px;
            display: flex;
            gap: 20px;
            align-items: flex-start;
            transition: 0.4s;
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          }

          .skill-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          }

          .skill-icon {
            width: 65px;
            height: 65px;
            min-width: 65px;
            background: #f5b932;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
          }

          .skill-badge {
            background: black;
            color: white;
            padding: 12px 22px;
            border-radius: 9999px;
            font-weight: 700;
            transition: 0.3s;
            cursor: pointer;
            font-size: 14px;
          }

          .skill-badge:hover {
            background: #f5b932;
            color: black;
            transform: scale(1.05);
          }

          @media (max-width: 640px) {
            .skill-card {
              flex-direction: column;
              align-items: flex-start;
              padding: 20px;
            }

            .skill-icon {
              width: 58px;
              height: 58px;
              min-width: 58px;
              font-size: 24px;
            }

            .skill-badge {
              padding: 10px 18px;
              font-size: 12px;
            }
          }
        `}
      </style>

    </section>
  );
}

export default Skill;