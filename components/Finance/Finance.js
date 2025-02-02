"use client"
import Image from 'next/image'
import React from 'react'
import { FinanceSvg } from '../Svg/Svg'
import { motion } from 'framer-motion';

export default function Finance() {
    return (
        <>
        <section className='container mt-[62px]'>
            <div className="undefined grid md:grid-cols-2 grid-cols-1 md:gap-[15px] relative">
                <div className='md:space-y-sm space-y-xs'>
                    <h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">POWERING THE FUTURE OF FINANCE</h6>
                    <h2 className="undefined whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">Uncovering new ways to delight customers</h2>
                    <div className="lg:pt-2">
                        <div>
                            <div className="text-body-1">
                                <p>
                                    <strong>AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</strong>
                                </p>
                            </div>
                            <div className="text-body-1">
                                <p>
                                    <br />
                                    Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block relative h-fit lg:text-clip'>
                    <figure className='w-[76%] mx-auto' style={{
                        boxShadow: "0px 23px 30px 0px #16437763"
                    }} >

 <Image alt='Image' width={1124} height={1364} src='https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format' />


                    </figure>
                    <>
                        <div>

                                <motion.figure
                        className="absolute top-[10%] right-[12%] w-[min(115px,_30%)] rounded-full drop-shadow-2xl"
                        initial={{ opacity: 0, y: 50 }} // Start the animation off-screen
          whileInView={{ opacity: 1, y: 0 }} // When in view, animate to visible position
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
                    >

                                <Image alt='Image' width={116} height={115} src='https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format' />

                                </motion.figure>



                            <motion.figure
                        className="absolute top-[40%] left-[20%] w-[min(87px,_20%)] rounded-full drop-shadow-2xl"
                        initial={{ opacity: 0, y: 50 }} // Start the animation off-screen
          whileInView={{ opacity: 1, y: 0 }} // When in view, animate to visible position
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
                    >

                                <Image alt='Image' width="89" height="88" src='https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg' />

                                </motion.figure>



                            <motion.figure
                       className="absolute top-[20%] left-[12%] -translate-x-1/2 w-[min(73px,_18%)] rounded-full drop-shadow-2xl"

                        initial={{ opacity: 0, y: 50 }} // Start the animation off-screen
          whileInView={{ opacity: 1, y: 0 }} // When in view, animate to visible position
          viewport={{ once: true, amount: 0.3 }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                        }}
                    >



                                <Image alt='Image' width="74" height="75" src='https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg' />



                                </motion.figure>
                                <motion.figure
        className="absolute inset-0 w-full h-full -z-10"
        initial={{ y: "5%" }}
        animate={{ y: ["5%", "-5%", "5%"] }} // Move up and down
        transition={{
          duration: 5,  // Adjust speed
          ease: "easeInOut",
          repeat: Infinity,  // Loop infinitely
        }}
      >
        <img
          className="object-cover w-full h-full overflow-visible"
          loading="lazy"
          src="https://anytxn.com/backgrounds/home/futureOfFinance/background.svg"
          alt="background frame"
        />
      </motion.figure>

      <motion.figure
        className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]"
        initial={{ y: "-2%" }}
        animate={{ y: ["-2%", "2%", "-2%"] }} // Move up and down
        transition={{
          duration: 5,  // Adjust speed
          ease: "easeInOut",
          repeat: Infinity,  // Loop infinitely
        }}
      >
        <img
          className="object-cover w-full h-full overflow-visible"
          loading="lazy"
          src="https://anytxn.com/backgrounds/home/futureOfFinance/foreground.png"
          alt="foreground frame"
        />
      </motion.figure>

                        </div>
                    </>
                </div>
            </div>
        </section>
        <FinanceSvg/>
        </>
    )
}
