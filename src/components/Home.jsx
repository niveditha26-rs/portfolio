import React from "react";

function Home() {
  return (
    <section className="min-h-screen bg-[#dcdcdc] flex items-center justify-center px-6 py-10 overflow-hidden">

      {/* MAIN CARD */}
      <div className="relative bg-[#efefef] w-full max-w-7xl min-h-[85vh] shadow-2xl rounded-sm grid md:grid-cols-2 items-center px-10 md:px-20">

        {/* LEFT YELLOW BAR */}
        <div className="absolute left-0 top-24 w-8 h-56 bg-[#f5b932]"></div>

        {/* RIGHT YELLOW BAR */}
        <div className="absolute right-0 top-24 w-8 h-56 bg-[#f5b932]"></div>

        {/* LEFT CONTENT */}
        <div className="space-y-6 z-10">

          {/* SMALL TITLE */}
          <div className="flex items-center gap-4 animate-slideLeft">

            <div className="w-16 h-[4px] bg-[#f5b932] animate-line"></div>

            <p className="text-[#f5b932] text-3xl font-extrabold uppercase tracking-wide animate-bounceText">
              HI THERE!!!
            </p>

          </div>

          {/* NAME */}
          <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight text-black animate-fadeUp">

            I'M{" "}

            <span className="text-transparent stroke-text animate-name">
              NIVEDITHA R S
            </span>

          </h1>

          {/* TAGS */}
          <div className="space-y-3">

            <div className="inline-block bg-black text-[#f5b932] px-4 py-2 text-sm font-bold uppercase tracking-wide">
              Diploma Computer Engineering Student
            </div>

            <br />

            <div className="inline-block bg-black text-[#f5b932] px-4 py-2 text-sm font-bold uppercase tracking-wide">
              Ready To Build Modern Websites
            </div>

          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-8 max-w-md text-sm md:text-base">
            Passionate about Web Development, UI Design and creating responsive modern websites using React and Tailwind CSS.
          </p>

          {/* BUTTON */}
          <button className="bg-black text-white px-8 py-4 rounded-full uppercase font-semibold tracking-wide hover:bg-[#f5b932] hover:text-black transition duration-500 hover:scale-105">
            More About Me
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center mt-16 md:mt-0">

          {/* CIRCLE OUTLINE */}
          <div className="absolute w-[420px] h-[420px] border-[3px] border-[#f5b932] rounded-full animate-spinSlow"></div>

          {/* IMAGE */}
          <div className="w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-2xl z-10 animate-imageFloat">

            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop"
              alt="profile"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />

          </div>

        </div>

      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          .stroke-text {
            -webkit-text-stroke: 2px #f5b932;
            color: transparent;
          }

          /* SLIDE LEFT */
          .animate-slideLeft {
            animation: slideLeft 1s ease forwards;
          }

          @keyframes slideLeft {
            from {
              opacity: 0;
              transform: translateX(-80px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          /* HI THERE BOUNCE */
          .animate-bounceText {
            display: inline-block;
            animation: bounceText 2s infinite;
          }

          @keyframes bounceText {
            0% {
              transform: translateY(0);
            }

            25% {
              transform: translateY(-8px);
            }

            50% {
              transform: translateY(0);
            }

            75% {
              transform: translateY(-4px);
            }

            100% {
              transform: translateY(0);
            }
          }

          /* LINE ANIMATION */
          .animate-line {
            animation: lineMove 2s infinite alternate;
          }

          @keyframes lineMove {
            from {
              width: 40px;
            }

            to {
              width: 80px;
            }
          }

          /* NAME FADE UP */
          .animate-fadeUp {
            animation: fadeUp 1.2s ease forwards;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(60px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* NAME ZOOM */
          .animate-name {
            display: inline-block;
            animation: zoomText 2s ease-in-out infinite;
          }

          @keyframes zoomText {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.08);
            }
            100% {
              transform: scale(1);
            }
          }

          /* SPIN CIRCLE */
          .animate-spinSlow {
            animation: spinSlow 12s linear infinite;
          }

          @keyframes spinSlow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          /* IMAGE FLOAT */
          .animate-imageFloat {
            animation: floatImage 4s ease-in-out infinite;
          }

          @keyframes floatImage {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-15px);
            }

            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>

    </section>
  );
}

export default Home;