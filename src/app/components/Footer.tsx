import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-10 px-4 border-t border-gray-300 dark:border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Connect with Me</h2>
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="https://github.com/Mohan20030731?tab=repositories"
            target="_blank"
            className="text-2xl hover:text-primary transition-colors duration-300"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/mohan-kumar-b28109309"
            target="_blank"
            className="text-2xl hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="text-2xl hover:text-primary transition-colors duration-300"
          >
            <FaInstagram />
          </Link>
        </div>
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Rohith. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Built with using Next.js 15, React 19, TypeScript, Tailwind CSS 4
        </p>
      </div>
    </footer>
  );
};

export default Footer;
