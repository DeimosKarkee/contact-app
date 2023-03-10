"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-lg">
              Contacts
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "text-gray-200" : "text-white"
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                Contacts
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === "/about" ? "text-gray-200" : "text-white"
                } px-3 py-2 rounded-md text-sm font-medium`}
              >
                About
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-gray-700 px-2 pt-2 pb-3`}
      >
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-gray-200" : "text-white"
          } block px-3 py-2 rounded-md text-base font-medium`}
        >
          Contacts
        </Link>
        <Link
          href="/about"
          className={`${
            pathname === "/about" ? "text-gray-200" : "text-white"
          } block px-3 py-2 rounded-md text-base font-medium`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
