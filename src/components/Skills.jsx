"use client";

import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5 & CSS3",
        "JavaScript (ES6+)",
        "SCSS, SASS, LESS",
        "React.js",
        "Next.js",
        "Webpack, Vite, Gulp, Parcel",
        "Git, GitHub",
        "RESTful APIs",
        "Performance Optimization",
        "UI/UX Design Understanding (Figma)",
        "Progressive Web Apps",
      ],
    },
    {
      title: "Shopify",
      skills: [
        "Shopify Liquid",
        "Shopify API (REST & GraphQL)",
        "Shopify Theme Customization",
        "Headless Shopify (React, Next.jS, Hydrogen)",
        "Shopify CLI & Theme Kit",
        "Custom Checkout Development",
        "Metafields & Shopify Data Management",
        "Payment Gateway Integration & Shopify Scripts",
        "SEO & Page Speed Optimization in Shopify",
      ],
    },
  ];

  return (
    <section className="py-12 mt-8 md:mt-12 lg:mt-16">
      {skillCategories.map((category, index) => (
        <div key={index} className="mb-16 last:mb-0 overflow-hidden">
          <h2 className="text-[3vw] font-bold text-white mb-8 px-8">
            <span>
              {category.title}
              <span className="text-yellow-600"> Skills</span>
            </span>
          </h2>
          <div className="relative overflow-hidden w-full">
            {/* Outer container for infinite loop */}
            <div className="flex gap-12 items-center whitespace-nowrap animate-marquee">
              {/* Duplicate items for seamless scrolling */}
              {[...category.skills, ...category.skills].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 text-3xl font-bold text-white"
                >
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <style jsx global>{`
            @keyframes marquee {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
            .animate-marquee {
              display: flex;
              min-width: 200%;
              animation: marquee 15s linear infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .animate-marquee {
                animation: none;
              }
            }
          `}</style>
        </div>
      ))}
    </section>
  );
};

export default Skills;