"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: "Find the Perfect Tutor for Any Subject",
      description: "Connect with expert tutors instantly. Master academic topics, school curriculums, and professional skills with custom 1-on-1 guidance.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    },
    {
      id: 2,
      title: "Smart Scheduling, Zero Overlaps",
      description: "Book sessions effortlessly using our automated dashboard. Get your digital class tokens and manage your learning calendar in real-time.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    },
    {
      id: 3,
      title: "Elevate Your Learning at Your Own Pace",
      description: "No matter your goal—school exams, test preps, or coding—our specialized mentors adapt entirely to your personal speed.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200",
    }
  ];

  return (
    <div className="w-full h-[500px] -mt-10 md:h-[600px] relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full group">
            {/* Image Section */}
            <div className="absolute inset-0 z-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={slide.id === 1}
                sizes="100vw"
                className="object-cover"
              />
              {/* Premium Cinematic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:bg-gradient-to-b md:from-black/70 md:via-neutral/40 md:to-black/80" />
            </div>

            {/* Content Section */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 md:px-12 text-white">
              <div className="max-w-3xl space-y-6">
                <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight drop-shadow-md leading-tight text-neutral-100">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-xl font-light opacity-90 max-w-xl mx-auto drop-shadow-sm text-neutral-200">
                  {slide.description}
                </p>
                <div className="pt-4">
                  <Link 
                    href="/tutors" 
                    className="btn btn-primary btn-md md:btn-lg px-10 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Find Tutors
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}