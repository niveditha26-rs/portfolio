import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">

          <h1 className="text-3xl font-black uppercase tracking-wide">
            Niveditha R S
          </h1>

          <p className="text-gray-400 mt-3 max-w-md leading-7">
            Frontend Developer passionate about building modern,
            responsive and user-friendly websites using React
            and Tailwind CSS.
          </p>

        </div>


        {/* RIGHT SIDE - SOCIAL LINKS */}
        <div className="flex items-center gap-5">

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/niveditha-r-s-39236936a"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            💼
          </a>

          {/* GITHUB */}
          <a
            href="https://github.com/niveditha26-rs"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            💻
          </a>

          {/* EMAIL */}
          <a
            href="mailto:nivedithar.s611@gmail.com"
            className="social-icon"
          >
            📧
          </a>

        </div>

      </div>

      {/* BOTTOM TEXT */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center">

        <p className="text-gray-400 text-sm">
          © 2026 Niveditha R S. All Rights Reserved.
        </p>

      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          .footer-link {
            position: relative;
            transition: 0.3s;
          }

          .footer-link:hover {
            color: #f5b932;
          }

          .footer-link::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -5px;
            width: 0%;
            height: 2px;
            background: #f5b932;
            transition: 0.3s;
          }

          .footer-link:hover::after {
            width: 100%;
          }

          .social-icon {
            width: 55px;
            height: 55px;
            background: #f5b932;
            color: black;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            transition: 0.3s;
          }

          .social-icon:hover {
            background: white;
            transform: translateY(-5px);
          }

          @media (max-width: 768px) {
            .social-icon {
              width: 50px;
              height: 50px;
              font-size: 22px;
            }
          }
        `}
      </style>

    </footer>
  );
}

export default Footer;