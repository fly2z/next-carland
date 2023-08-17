"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Image from "next/image";

const testimonialData = [
  {
    message:
      "They truly exceed my expectations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Jane Doe",
    job: "Photographer & Videographer",
  },
  {
    message: "Quick booking, clean car, friendly staff. Highly recommended!",
    avatar: "/images/testimonial/avatar.png",
    name: "John Smith",
    job: "Business Traveler",
  },
  {
    message: "Perfect family vacation with a hassle-free, comfy ride.",
    avatar: "/images/testimonial/avatar.png",
    name: "Emily Johnson",
    job: "Family Vacationer",
  },
  {
    message: "Unforgettable off-road adventure, smooth rental experience.",
    avatar: "/images/testimonial/avatar.png",
    name: "David Rodriguez",
    job: "Adventure Enthusiast",
  },
  {
    message: "Enjoyable weekend getaway with a clean, fuel-efficient car.",
    avatar: "/images/testimonial/avatar.png",
    name: "Sarah Williams",
    job: "Weekend Getaway",
  },
];

export default function TestimonialSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto"
    >
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map(({ message, avatar, name, job }, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col justify-center items-center text-center">
              <FaQuoteLeft className="text-7xl text-accent mb-6" />
              <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                {message}
              </div>
              <Image
                src={avatar}
                width={64}
                height={64}
                alt=""
                className="mb-4"
              />
              <div className="text-lg font-medium">{name}</div>
              <div className="text-secondary">{job}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}
