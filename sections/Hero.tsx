// components/sections/Hero.tsx
import React from "react";
import Image from "next/image";
import heroImage from "../assets/rotaractgroup.png";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="Team Photo"
        fill
        priority
        className="object-cover"
      />

      {/* Transparent overlay */}
      <div className="absolute inset-0 opacity-44 bg-[#C6BCD0]"></div>

      {/* Content pushed lower */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 pb-24">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#D41367]">
          Empowering Youth. Creating Impact.
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mb-10 text-lg md:text-xl text-[#D41367] opacity-75">
          Rotaract Club of Chandivali, Mumbai brings together young leaders to
          serve the community, develop skills, and create lasting friendships.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href="/register"
            className="px-6 py-3 rounded-md shadow-md bg-[#F7A81B] text-[#17458F] hover:bg-[#F8B53D]"
          >
            Join Us
          </Link>

          <Link
            href="/projects"
            className="flex items-center gap-2 text-[#17458F] hover:underline"
          >
            Our Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
