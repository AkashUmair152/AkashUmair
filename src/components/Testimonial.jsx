"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination module CSS
import { Pagination, Autoplay } from "swiper/modules"; // Pagination and Autoplay modules
import Image from "next/image";

const Testimonial = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, TechCorp",
      image: "/john-doe.jpg", // Replace with your image path
      review:
        "Akash is an exceptional developer! He transformed our Shopify store into a high-converting machine. His attention to detail and expertise in frontend development are unmatched.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Marketing Manager, ShopWise",
      image: "/jane-smith.jpg", // Replace with your image path
      review:
        "Working with Akash was a breeze. He delivered a custom Shopify theme that exceeded our expectations. Our website's performance improved significantly, and sales skyrocketed!",
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Founder, EcomPro",
      image: "/michael-brown.jpg", // Replace with your image path
      review:
        "Akash is a true professional. His ability to optimize our store for speed and conversions has been invaluable. I highly recommend him for any Shopify project.",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      position: "CTO, DevSolutions",
      image: "/sarah-johnson.jpg", // Replace with your image path
      review:
        "Akash's work ethic and technical skills are outstanding. He helped us build a scalable e-commerce platform that handles thousands of transactions daily.",
    },
    {
      id: 5,
      name: "David Wilson",
      position: "Product Manager, StoreMax",
      image: "/david-wilson.jpg", // Replace with your image path
      review:
        "I’ve worked with many developers, but Akash stands out. His ability to deliver on time and exceed expectations is rare in the industry.",
    },
  ];

  return (
    <section className="py-12 bg-black text-white mt-8 md:mt-12 lg:mt-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What My Clients Say
        </h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20} // Space between cards
          slidesPerView={3} // Show 3 cards at a time
          loop={true} // Enable infinite looping
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keep autoplay active after user interaction
          }}
          pagination={{ clickable: true }} // Pagination dots
          breakpoints={{
            // Responsive breakpoints
            320: {
              slidesPerView: 1, // 1 card on small screens
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2, // 2 cards on medium screens
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3, // 3 cards on large screens
              spaceBetween: 20,
            },
          }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Client Image */}
                <Image
                  src={testimonial.image}
                  alt={`${testimonial.name}'s profile`}
                  width={100}
                  height={100}
                  className="rounded-full object-cover mx-auto mb-4"
                />
                {/* Client Name and Position */}
                <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
                <p className="text-gray-400 text-sm text-center mb-4">
                  {testimonial.position}
                </p>
                {/* Testimonial Description */}
                <p className="text-base leading-relaxed text-center">
                  &quot;{testimonial.review}&quot;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;