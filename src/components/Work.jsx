import React from "react";
import Image from "next/image";
import ixperience from "@/images/ixperience.png";
import Link from "next/link";

const Work = () => {
  return (
    <section className="border-t-2 border-white text-white uppercase mt-8 md:mt-12 lg:mt-16">
      {/* Repeated Work Items */}
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="group flex flex-col md:flex-row justify-between border-b-2 border-white items-center h-fit py-6 md:py-[4vw] px-4 md:px-[2vw] relative hover:cursor-pointer"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-0 text-center md:text-left">
            Latest Work
          </h1>
          <h5 className="text-lg md:text-xl mb-4 md:mb-0">2024</h5>
          <Image
            width={500}
            height={300}
            src={ixperience}
            className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48 md:w-64 lg:w-[22vw] h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
            alt="Project Preview"
          />
        </div>
      ))}

      {/* View All Work Button */}
      <div className="flex justify-start mt-8 md:mt-12">
        <Link href="/projects"  className={`border-2 rounded-full text-xl font-semibold border-white text-white max-w-fit py-2 px-6 hover:scale-105 duration-200 hover:border-yellow-600 inline-block`}>view all work</Link>
      </div>
      
    </section>
  );
};

export default Work;