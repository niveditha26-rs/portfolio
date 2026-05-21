import React from "react";

function Footer() {
  return (
    <footer className="bg-[#efefef] text-black px-6 py-12 border-t border-gray-300">

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-8">

        {/* NAME */}
        <div>

          <h1 className="text-3xl md:text-4xl font-black uppercase tracking-widest">
            Niveditha R S
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl leading-8 text-sm md:text-base">
            Frontend Developer passionate about building modern,
            responsive and user-friendly websites using React
            and Tailwind CSS.
          </p>

        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center justify-center gap-5">

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

        {/* BOTTOM TEXT */}
        <div className="w-full border-t border-gray-300 pt-6">

          <p className="text-gray-600 text-sm md:text-base">
            © 2026 Niveditha R S. All Rights Reserved.
          </p>

        </div>

      </div>

      {/* CUSTOM CSS */}
      <style>
        {`
          .social-icon {
            width: 58px;
            height: 58px;
            background: black;
            color: white;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            transition: 0.3s;
          }

          .social-icon:hover {
            background: #f5b932;
            color: black;
            transform: translateY(-6px) scale(1.05);
          }

          @media (max-width: 768px) {
            .social-icon {
              width: 52px;
              height: 52px;
              font-size: 22px;
            }
          }
        `}
      </style>

    </footer>
  );
}

export default Footer;