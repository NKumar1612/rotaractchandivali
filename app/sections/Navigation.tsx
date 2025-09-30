"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between w-full px-8 py-4 bg-[#C6BCD0]/50">
        {/* Logo (left) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Rotaract Club of Chandivali, Mumbai"
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </Link>

        {/* Links (centered) */}
        <div className="hidden md:flex flex-1 justify-center space-x-8 text-[#17458F] font-medium">
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>

        {/* Join Us (far right) */}
        <Link
          href="/register"
          className="hidden md:block px-4 py-2 border-2 rounded font-medium text-[#17458F] border-[#17458F] hover:bg-[#17458F] hover:text-white transition"
        >
          Join Us
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-[#17458F] text-2xl focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#C6BCD0]/50 flex flex-col items-center py-6 space-y-6 text-[#17458F] font-medium">
          <Link href="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
          <Link
            href="/register"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 border-2 rounded font-medium text-[#17458F] border-[#17458F] hover:bg-[#17458F] hover:text-white transition"
          >
            Join Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
