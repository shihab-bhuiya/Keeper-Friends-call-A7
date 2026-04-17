import React from "react";
 

const Footer = () => {
  return (
    <footer className="bg-[#214c3e] text-white py-10 mt-10">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          KeenKeeper
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-200 mt-3 max-w-xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <div className="mt-6">
          <p className="text-sm font-medium mb-3">Social Links</p>

          <div className="flex justify-center gap-3">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full"
            >
              {<img src='../assets/facebook.png' alt="linkedin" className="w-4 h-4" />}
            </a>

            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full"
            >
              <img src="../assets/instagram.png" alt="" />
            </a>

            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full"
            >
             <img src="../assets/twitter.png" alt="" />
            </a>
          </div>
        </div>

        
        <div className="mt-8 text-xs text-gray-300 flex flex-col md:flex-row justify-between items-center gap-3">

          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;