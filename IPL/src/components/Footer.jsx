import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="bottom-0 flex flex-col items-center mt-8 font-sans">
    <h1 className="mb-4 text-lg font-semibold">
      Made by {" "}
      
      <a href="https://www.linkedin.com/in/abhisekpanda2004/" target="_blank" className="font-medium text-blue-600">
        Abhisek Panda
      </a>{" "}
      {" "}
    </h1>
    <p className="mt-4 text-sm text-gray-600">
      Follow me on LinkedIn for more updates!
    </p>
  </div>
);

export default Footer;
