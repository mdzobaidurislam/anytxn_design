"use client"
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { HeroSvg } from '../Svg/Svg';
import { motion } from 'framer-motion';

const HomeHero = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger animation when section comes into view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <motion.section
      id="home-hero__content__container"
      ref={sectionRef}
      className="lg:h-[max(620px,_calc(92vh-49px))] h-auto relative w-full text-white lg:bg-clip-hero-container overflow-hidden pt-[30%] md:pt-[20%] lg:pt-0 max-lg:pb-[15%]"
      initial={{ opacity: 0, y: 20 }} // Initial state
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} // Animation when in view
      transition={{ duration: 1 }} // Transition properties
    >
      <div className="container relative z-10 w-full h-full md:flex md:items-center md:justify-center">
        <div className="h-fit lg:flex-[65] xl:flex-[75]">
          <header className="max-w-2xl lg:space-y-sm space-y-[16px] mb-[32px]">
            <motion.h1
              className="lg:max-w-max lg:whitespace-pre-line lg:text-head-1 font-Montserrat text-res-head-1 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Embrace the future of finance
            </motion.h1>
            <motion.h5
              className="!text-white max-w-[37rem] lg:mr-5 text-res-head-5 text-blue-main lg:text-head-5 font-Montserrat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation
            </motion.h5>
          </header>
          <div className="flex lg:flex-row flex-col lg:space-x-[16px] space-y-4 lg:space-y-0 w-full lg:mb-0 mb-md max-w-xl">
            <motion.a
              className="md:py-[15.5px] py-[14px] px-[42px] rounded-xs shadow-button-primary text-link text-white flex items-center justify-center space-x-[8px] bg-orange-main"
              href="/en/contact-us"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }} // Scale on hover
              transition={{ duration: 0.3 }}
            >
              <span style={{ transform: 'translateX(var(--motion-translateX))' }}>Reach Out to Us</span>
              <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'translateX(var(--motion-translateX))' }}>
                <path d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z" fill="white"></path>
              </svg>
            </motion.a>
          </div>
        </div>
        <div className="lg:flex-[35] xl:flex-[25] lg:block hidden"></div>
      </div>
      <motion.div
        className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full bg-clip-hero-image pointer-events-none"
        initial={{ transform: 'translateX(-12%)' }}
        animate={{ transform: isInView ? 'translateX(0)' : 'translateX(-12%)' }}
        transition={{ duration: 1 }}
      >
        <figure className="h-[115%] w-[115%] object-cover">
          <Image
            src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?auto=format"
            alt="background image"
            width={7952}
            height={5304}
            className="h-full w-full object-cover"
            sizes="55vw"
          />
        </figure>
        <div className="gradient-overlay"></div>
      </motion.div>
      <HeroSvg />

    </motion.section>
  );
};

export default HomeHero;
