import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#dcdcdc] flex items-center justify-center px-4 sm:px-6 py-14 md:py-20"
    >
      {/* MAIN CONTAINER */}
      <div className="bg-[#efefef] w-full max-w-7xl shadow-2xl rounded-2xl px-5 sm:px-8 md:px-20 py-10 md:py-16">

        {/* TITLE */}
        <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16">

          <div className="w-10 md:w-16 h-[4px] bg-[#f5b932]"></div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase text-black tracking-wide">
            Contact
          </h1>

        </div>

        {/* CONTACT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-black text-black mb-5 md:mb-6">
              Let's Work Together
            </h2>

            <p className="text-gray-600 leading-8 text-base md:text-lg mb-10">
              I’m always open to discussing new projects,
              creative ideas and opportunities to grow as a
              frontend developer and UI designer.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-7">

              {/* EMAIL */}
              <div className="contact-box">

                <div className="contact-icon">
                  📧
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-1">
                    Email
                  </h3>

                  <a
                    href="mailto:nivedithar.s611@gmail.com"
                    className="text-gray-600 hover:text-[#f5b932] transition duration-300 break-all"
                  >
                    nivedithar.s611@gmail.com
                  </a>
                </div>

              </div>

              {/* PHONE */}
              <div className="contact-box">

                <div className="contact-icon">
                  📱
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-1">
                    Phone
                  </h3>

                  <a
                    href="tel:+91XXXXXXXXXX"
                    className="text-gray-600 hover:text-[#f5b932] transition duration-300"
                  >
                    +91 XXXXX XXXXX
                  </a>
                </div>

              </div>

             

              </div>

              {/* LINKEDIN */}
              <div className="contact-box">

                <div className="contact-icon">
                  💼
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-1">
                    LinkedIn
                  </h3>

                  <a
                    href="https://www.linkedin.com/in/niveditha-r-s-39236936a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#f5b932] transition duration-300 break-all"
                  >
                    linkedin.com/in/niveditha-r-s
                  </a>
                </div>

              </div>

              {/* GITHUB */}
              <div className="contact-box">

                <div className="contact-icon">
                  💻
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-1">
                    GitHub
                  </h3>

                  <a
                    href="https://github.com/niveditha26-rs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#f5b932] transition duration-300 break-all"
                  >
                    github.com/niveditha26-rs
                  </a>
                </div>
                <div>
                   {/* LOCATION */}
              <div className="contact-box">

                <div className="contact-icon">
                  📍
                </div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-1">
                    Location
                  </h3>

                  <p className="text-gray-600">
                    Thiruvananthapuram, Kerala
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl">

            <h2 className="text-2xl md:text-3xl font-black text-black mb-8">
              Send Message
            </h2>

            <form className="space-y-5 md:space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl border border-gray-300 outline-none focus:border-[#f5b932]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl border border-gray-300 outline-none focus:border-[#f5b932]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl border border-gray-300 outline-none focus:border-[#f5b932]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl border border-gray-300 outline-none focus:border-[#f5b932]"
              ></textarea>

              <button
                type="submit"
                className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-full uppercase font-bold tracking-wide hover:bg-[#f5b932] hover:text-black transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          .contact-box {
            display: flex;
            gap: 16px;
            align-items: center;
          }

          .contact-icon {
            min-width: 60px;
            height: 60px;
            background: #f5b932;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 26px;
            transition: 0.3s;
          }

          .contact-icon:hover {
            transform: scale(1.1);
            background: black;
          }

          @media (max-width: 640px) {
            .contact-box {
              align-items: flex-start;
            }

            .contact-icon {
              min-width: 55px;
              height: 55px;
              font-size: 22px;
            }
          }
        `}
      </style>

    </section>
  );
}

export default Contact;