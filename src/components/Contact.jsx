import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#dcdcdc] flex items-center justify-center px-6 py-20"
    >

      {/* MAIN CONTAINER */}
      <div className="bg-[#efefef] w-full max-w-7xl shadow-2xl px-8 md:px-20 py-16">

        {/* TITLE */}
        <div className="flex items-center gap-6 mb-16">

          <div className="w-16 h-[4px] bg-[#f5b932]"></div>

          <h1 className="text-5xl md:text-7xl font-black uppercase text-black tracking-wide">
            Contact
          </h1>

        </div>

        {/* CONTACT SECTION */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-4xl font-black text-black mb-6">
              Let's Work Together
            </h2>

            <p className="text-gray-600 leading-9 text-lg mb-10">
              I’m always open to discussing new projects,
              creative ideas and opportunities to grow as a
              frontend developer and UI designer.
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-8">

              <div className="contact-box">

                <div className="contact-icon">
                  📧
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-1">
                    Email
                  </h3>

                  <p className="text-gray-600">
                    nivedithars@example.com
                  </p>
                </div>

              </div>

              <div className="contact-box">

                <div className="contact-icon">
                  📱
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-1">
                    Phone
                  </h3>

                  <p className="text-gray-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>

              </div>

              <div className="contact-box">

                <div className="contact-icon">
                  📍
                </div>

                <div>
                  <h3 className="text-xl font-bold text-black mb-1">
                    Location
                  </h3>

                  <p className="text-gray-600">
                    Attingal, Thiruvananthapuram, Kerala
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="bg-white rounded-3xl p-10 shadow-xl">

            <h2 className="text-3xl font-black text-black mb-8">
              Send Message
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-6 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#f5b932]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-6 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#f5b932]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#f5b932]"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-6 py-4 rounded-xl border border-gray-300 outline-none focus:border-[#f5b932]"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white px-8 py-4 rounded-full uppercase font-bold tracking-wide hover:bg-[#f5b932] hover:text-black transition duration-300"
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
            gap: 20px;
            align-items: center;
          }

          .contact-icon {
            width: 70px;
            height: 70px;
            background: #f5b932;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            transition: 0.3s;
          }

          .contact-icon:hover {
            transform: scale(1.1);
            background: black;
          }
        `}
      </style>

    </section>
  );
}

export default Contact;