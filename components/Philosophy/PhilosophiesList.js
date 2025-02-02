"use client";
import { motion } from "framer-motion";

const philosophiesData = [
  {
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    image: {
      srcset:
        "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?w=50&auto=format 50w",
      src:
        "https://cdn.sanity.io/images/6jywt20u/production/28029da89383a59e47420ee46b7e4c364051b45f-50x50.svg?auto=format",
      width: 50,
      height: 50,
      alt: "Full suite solutions",
    },
  },
  {
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    image: {
      srcset:
        "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?w=50&auto=format 50w",
      src:
        "https://cdn.sanity.io/images/6jywt20u/production/36c4da4283252fda5dce13c46ea3e06a5312218c-50x51.png?auto=format",
      width: 50,
      height: 51,
      alt: "Simplify the complex",
    },
  },
  {
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    image: {
      srcset:
        "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?w=50&auto=format 50w",
      src:
        "https://cdn.sanity.io/images/6jywt20u/production/1966d94a29ffe1673fd510327ba0eb409f82b680-50x50.svg?auto=format",
      width: 50,
      height: 50,
      alt: "Cutting-edge tech",
    },
  },
];

const PhilosophiesList = () => {
  return (
    <ul
      id="home-philosophies__card__container"
      className="grid lg:grid-cols-3 grid-cols-2 gap-[30px]"
    >
      {philosophiesData.map((philosophy, index) => (
        <motion.li
          key={index}
          className="translate-y-[20%] opacity-0 z-20 h-full md:space-y-sm space-y-[8px] bg-[#F8FCFF] rounded-[20px] md:p-md p-sm"
          initial={{ opacity: 0, y: 50 }} // Start the animation off-screen
          whileInView={{ opacity: 1, y: 0 }} // When in view, animate to visible position
          viewport={{ once: true, amount: 0.3 }} // Trigger animation once when the element is 30% visible in the viewport
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <figure className="w-fit rounded-full">
            <img
              srcSet={philosophy.image.srcset}
              src={philosophy.image.src}
              width={philosophy.image.width}
              height={philosophy.image.height}
              sizes="50px"
              alt={philosophy.image.alt}
              className="lg:h-[50px] lg:w-[50px] h-[32px] w-[32px]"
              loading="lazy"
            />
          </figure>
          <h4 className="font-Montserrat text-blue-text text-res-head-4 lg:text-head-4">
            {philosophy.title}
          </h4>
          <p className="text-body-1">{philosophy.description}</p>
        </motion.li>
      ))}
    </ul>
  );
};

export default PhilosophiesList;
