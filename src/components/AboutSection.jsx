import React from "react";
import Image from "next/image";
import profile from "@/images/profile.png";
import Link from "next/link";

const About = () => {
  return (
    <section className="min-h-screen md:min-h-[50vh] flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 py-12 md:py-0 px-4 md:px-8 mx-auto mt-8 md:mt-12 lg:mt-16">
      {/* Image Section */}
      <div className="w-full md:w-[30%] max-w-[400px] flex justify-center">
        <Image
          src={profile}
          alt="Profile Picture"
          width={400}
          height={400}
          className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-[400px] lg:h-[400px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[55%] text-white space-y-4 md:space-y-6">
        <h1 className="text-3xl md:text-[3vw] lg:text-2xl xl:text-3xl font-bold text-center md:text-left">
          About Me
        </h1>
        <div className="content flex flex-col gap-4 md:gap-6">
          <p className="text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            I’m Akash Umair, a Shopify Developer & Frontend Architect dedicated
            to building high-performance e-commerce experiences that drive real
            business results. With 100+ Shopify stores delivered, I specialize
            in creating fast, scalable, and conversion-optimized storefronts
            using Liquid, React, and Next.js. Whether you need a custom Shopify
            theme, a headless commerce solution, or a complete store migration,
            I ensure seamless performance, 40% faster load times, and a
            measurable boost in sales. No bloated plugins—just clean, efficient
            code that works. Ready to transform your Shopify store into a
            revenue powerhouse? Let’s make it happen!
          </p>
          <div className="flex justify-start mt-8 md:mt-12">
        <Link href="/about"  className={`border-2 rounded-full text-xl font-semibold border-white text-white max-w-fit py-2 px-6 hover:scale-105 duration-200 hover:border-yellow-600 inline-block`}>Let's Know My Story</Link>
      </div>
        </div>
      </div>
    </section>
  );
};

export default About;