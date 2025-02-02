"use client"
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const statsData = [
  {
    arr: ">",
    value: 20,
    label: "Years of Experience",
  },
  {
    arr: "+",
    value: 40,
    label: "Financial Institutions",
  },
  {
    arr: ">",
    value: 200,
    label: "Customers Each (millions)",
  },
];

const Statistics = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true); // Trigger counting when in view
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
    <div ref={sectionRef} className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs"
        >
          <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
          {stat.arr} {isInView ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2.5} // Adjust the duration of the count animation
                separator=","
              />
            ) : (
             <>
              {stat.value}
             </>
            )}
          </h2>
          <p className="text-right text-[#151D2F] lg:text-center max-lg:text-res-link lg:text-lg lg:mt-[19px]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
