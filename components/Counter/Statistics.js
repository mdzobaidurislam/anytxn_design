import React from 'react';

const statsData = [
  {
    value: ">20",
    label: "Years of Experience",
  },
  {
    value: "40+",
    label: "Financial Institutions",
  },
  {
    value: ">200m",
    label: "Customers Each",
  },
];

const Statistics = () => {
  return (
    <div className="items-center justify-between max-lg:space-y-6 lg:flex xl:mx-28">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className="flex items-center border-dashed max-lg:justify-between lg:flex-col max-lg:border-b border-blue-highlight max-lg:pb-xs"
        >
          <h2 className="max-[280px]:text-[40px] text-[64px] lg:text-[96px] font-Montserrat tracking-[-0.02em] font-semibold leading-none bg-gradient-to-b from-blue-main to-[#0057BB] text-transparent bg-clip-text">
            {stat.value}
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