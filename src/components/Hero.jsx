"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const Hero = () => {
  

 

  return (
    <section className="min-h-screen md:min-h-[90vh] text-white flex flex-col justify-between gap-6 md:gap-4 px-4 md:px-8 py-8 md:py-0 mt-8 md:mt-12 lg:mt-16">
      {/* Hero Headings */}
      <div
       
        className="hero-headings flex flex-col justify-center items-center gap-3 md:gap-1 mx-auto mt-4 md:mt-[1vw] w-full max-w-6xl uppercase"
      >
        <h1 className="text-4xl md:text-[5.5vw] xl:text-[64px] font-bold leading-tight text-center">
          Jamstack <span className="text-yellow-600">&</span> Shopify
        </h1>
        <h1 className="text-3xl md:text-[5vw] xl:text-[56px] font-bold leading-tight text-center">
          Expert
        </h1>
        <p className="w-full md:max-w-[80%] text-base md:text-lg lg:text-xl capitalize text-center mt-4 md:mt-8 leading-relaxed"
        >
          Hey, I’m{" "}
          <span className="text-yellow-600 font-bold uppercase">
            Akash Umair{" "}
          </span>
          – The Shopify Wizard Who Turns Clicks Into Cash. Crafting High-Speed,
          High-Converting Shopify Stores That Make Competitors Sweat.
          <span className="block md:inline">3+ Years | </span>
          <span className="text-yellow-600 font-bold">
            100+ Stores Built | $500k+ Revenue{" "}
          </span>
          Generated. I engineer profit-boosting Shopify experiences for
          ambitious brands – blending conversion-obsessed design, headless
          commerce magic, and SEO rocket fuel.
          <span className="hidden md:inline">
            Specializing in custom Liquid themes, Hydrogen/React-powered
            storefronts, and JAMstack architectures,
          </span>{" "}
          I build stores that don’t just look stunning – they sell.
          <span className="hidden md:inline">Proven to Skyrocket Revenue by 25–60%</span>
        </p>
      </div>

      {/* Bottom Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 text-center md:text-left uppercase mb-8 md:mb-[3vw]"
      >
        <a
          href="https://www.muscled.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-600 transition-colors"
        >
          <h3 className="text-lg md:text-xl">
            Previously worked at <br /> muscled.co
          </h3>
        </a>
        <Link
          href="/projects"
          className="hover:text-yellow-600 transition-colors"
        >
          <h3 className="text-lg md:text-xl">Portfolio</h3>
        </Link>
        <a
          href="https://wa.me/923084583415"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-600 transition-colors"
        >
          <h3 className="text-lg md:text-xl">
            Available full & freelance <br /> work from Home
          </h3>
        </a>
      </div>
    </section>
  );
};

export default Hero;