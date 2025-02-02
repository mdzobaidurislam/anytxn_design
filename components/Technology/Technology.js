"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

const technologyData = [
  {
    id: 1,
    title: "Customer focused",
    heading: "Purpose-built financial services",
    description: [
      "Elevate customer experience and achieve agile financial product innovation with the world’s first, consumer-centric, real-time transaction account processing and credit limit system.",
      "Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities."
    ],
    image: "https://cdn.sanity.io/images/6jywt20u/production/c0be857dbe1878b1866b6bd0ddda7945d0f2779b-3672x2712.jpg"
  },
  {
    id: 2,
    title: "Agile and adaptable",
    heading: "Flexible financial solutions",
    description: [
      "Our agile and adaptable technology ensures your financial systems can evolve with your business needs.",
      "Stay ahead of the curve with scalable solutions that grow with your organization."
    ],
    image: "https://cdn.sanity.io/images/6jywt20u/production/56e02fe1cf2f41ff52aebe65d2e1466e93a9581b-6400x4800.jpg?w=640&auto=format"
  },
  {
    id: 3,
    title: "Compliance ready",
    heading: "Regulatory-compliant systems",
    description: [
      "Ensure your financial operations meet all regulatory requirements with our compliance-ready technology.",
      "We provide tools to simplify compliance and reduce risks."
    ],
    image: "https://cdn.sanity.io/images/6jywt20u/production/2b48e3b3fe95abd21ff8cb659f26ca05d91e9ef7-1509x1284.png?w=640&auto=format"
  },
  {
    id: 4,
    title: "Secure and safe",
    heading: "Robust security for your finances",
    description: [
      "Protect your financial data with our state-of-the-art security systems.",
      "Our technology ensures your data is safe from breaches and unauthorized access."
    ],
    image: "https://cdn.sanity.io/images/6jywt20u/production/912e8d76c36130d4ed0e39af1727dd0fe4fff570-10000x5000.jpg?w=640&auto=format"
  }
];

const Technology = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index

  const handleButtonClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideTo(index); // Slide to the selected index
      setActiveIndex(index); // Update active index
    }
  };

  return (
    <section className="container">
      <header className="undefined md:space-y-sm space-y-xs text-center">
        <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
          TECHNOLOGY BUILT FOR YOU
        </h6>
        <h2 className="undefined whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">
          The future of finance
        </h2>
      </header>

      <div className="flex-wrap space-x-4 justify-center items-center lg:flex hidden py-[32px]">
        {technologyData.map((item, index) => (
          <button
            key={item.id}
            className={`lg:text-body-p0 text-res-body-p0 !font-semibold xl:px-[48px] md:px-[38px] px-[28px] py-[6px] xl:py-[8px] rounded-[200px] transition-colors duration-300 text-blue-main ${
              activeIndex === index ? 'bg-blue-highlight' : 'hover:bg-[#F5FAFF]'
            }`}
            onClick={() => handleButtonClick(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={false}
        onSwiper={(swiper) => setSwiperInstance(swiper)} // Store Swiper instance
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active index on slide change
      >
        {technologyData.map((item) => (
          <SwiperSlide key={item.id}>
            <article className="grid lg:grid-cols-2 grid-cols-1 md:gap-[32px] lg:p-[64px] rounded-[20px] mb-5 p-[24px] lg:h-[550px] bg-white">
              <section className="lg:space-y-md space-y-sm">
                <header className="lg:space-y-md space-y-xs">
                  <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">
                    {item.title}
                  </h6>
                  <h3 className="undefined text-blue-text text-res-head-3 lg:text-head-3 font-Montserrat">
                    {item.heading}
                  </h3>
                </header>
                <figure className="md:hidden h-[150px]">
                  <Image
                    src={item.image}
                    width={3672}
                    height={2712}
                    alt={item.title}
                    className="h-full w-full object-cover rounded-[8px]"
                    loading="lazy"
                  />
                </figure>
                <div>
                  {item.description.map((paragraph, index) => (
                    <div key={index} className="text-body-1">
                      <p>{paragraph}</p>
                    </div>
                  ))}
                </div>
              </section>
              <figure className="hidden md:block h-[425px]">
                <Image
                  src={item.image}
                  width={3672}
                  height={2712}
                  alt={item.title}
                  className="h-full w-full object-cover rounded-[8px]"
                  loading="lazy"
                />
              </figure>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Technology;