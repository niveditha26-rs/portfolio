import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#dcdcdc] flex items-center justify-center px-6 py-20"
    >

      {/* MAIN CARD */}
      <div className="bg-[#efefef] w-full max-w-7xl shadow-2xl min-h-[85vh] px-8 md:px-20 py-16">

        {/* TITLE */}
        <div className="flex items-center gap-6 mb-12">

          <div className="w-16 h-[4px] bg-[#f5b932]"></div>

          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wide text-black">
            About Me
          </h1>

        </div>

        {/* INTRO */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">

          I'm{" "}

          <span className="text-[#f5b932]">
            Niveditha R S
          </span>

        </h2>

        <p className="text-gray-700 leading-9 text-lg max-w-5xl mb-16">
          Diploma in Computer Engineering student passionate about
          Web Development, UI Design and creating modern responsive
          websites using React and Tailwind CSS. I enjoy building
          clean user interfaces and learning modern frontend
          technologies to improve my skills every day.
        </p>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <div className="inline-block bg-[#f5b932] px-6 py-2 rounded-full mb-8">

              <h3 className="font-black uppercase tracking-wide text-black">
                What I Do
              </h3>

            </div>

            <div className="space-y-10">

              <div className="about-card">

                <div className="icon-box">
                  💻
                </div>

                <div>

                  <h4 className="text-2xl font-bold mb-3 text-black">
                    Web Development
                  </h4>

                  <p className="text-gray-600 leading-7">
                    Building responsive and modern websites using
                    React.js and Tailwind CSS.
                  </p>

                </div>

              </div>

              <div className="about-card">

                <div className="icon-box">
                  🎨
                </div>

                <div>

                  <h4 className="text-2xl font-bold mb-3 text-black">
                    UI Design
                  </h4>

                  <p className="text-gray-600 leading-7">
                    Designing clean and attractive user interfaces
                    with smooth user experience.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div className="grid grid-cols-2 gap-8">

              <div className="fact-circle">
                <h1>10+</h1>
                <p>Projects</p>
              </div>

              <div className="fact-circle">
                <h1>5+</h1>
                <p>Skills</p>
              </div>

              <div className="fact-circle">
                <h1>100%</h1>
                <p>Passion</p>
              </div>

              <div className="fact-circle">
                <h1>2027</h1>
                <p>Graduate</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          .about-card {
            display: flex;
            gap: 20px;
            align-items: flex-start;
          }

          .icon-box {
            width: 80px;
            height: 80px;
            min-width: 80px;
            background: #f5b932;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 34px;
            box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          }

          .fact-circle {
            width: 170px;
            height: 170px;
            background: black;
            border-radius: 9999px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            margin: auto;
            transition: 0.4s;
          }

          .fact-circle:hover {
            transform: scale(1.08);
            background: #f5b932;
            color: black;
          }

          .fact-circle h1 {
            font-size: 40px;
            font-weight: 900;
          }

          .fact-circle p {
            margin-top: 10px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
          }
        `}
      </style>

    </section>
  );
}

export default About;