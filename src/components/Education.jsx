import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="min-h-screen bg-[#dcdcdc] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20"
    >

      {/* MAIN CONTAINER */}
      <div className="bg-[#efefef] w-full max-w-7xl shadow-2xl rounded-xl px-5 sm:px-8 md:px-20 py-10 sm:py-16 overflow-hidden">

        {/* TITLE */}
        <div className="flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16">

          <div className="w-10 sm:w-16 h-[4px] bg-[#f5b932]"></div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase text-black tracking-wide">
            Education
          </h1>

        </div>

        {/* EDUCATION TIMELINE */}
        <div className="relative border-l-4 border-[#f5b932] ml-3 sm:ml-4 space-y-10 sm:space-y-16">

          {/* CARD 1 */}
          <div className="relative pl-8 sm:pl-10">

            {/* DOT */}
            <div className="absolute -left-[14px] sm:-left-[18px] top-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#f5b932] rounded-full border-4 border-[#efefef]"></div>

            {/* CONTENT */}
            <div className="bg-white p-5 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2">

              <p className="text-xs sm:text-sm uppercase tracking-[3px] text-[#f5b932] font-bold mb-3">
                2024 - 2027
              </p>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-black mb-3 leading-tight">
                Diploma in Computer Engineering
              </h2>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-5 leading-7">
                Govt Women's Polytechnic College, TVM
              </h3>

              <p className="text-gray-600 leading-7 sm:leading-8 text-sm sm:text-base">
                Pursuing Diploma in Computer Engineering with
                strong interest in frontend development, UI design,
                React.js and modern web technologies.
              </p>

            </div>

          </div>

          
        </div>

      </div>

    </section>
  );
}

export default Education;