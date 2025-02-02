import Image from 'next/image'
import React from 'react'
import PhilosophiesList from './PhilosophiesList'

export default function Philosophy() {
  return (
    <section className='container md:mb-[128px]'>
        <header className="undefined md:space-y-sm space-y-xs text-center"><h6 className="undefined lg:text-head-6 text-res-head-6 uppercase text-blue-main font-Montserrat">OUR PHILOSOPHY</h6>
        <h2 className="undefined whitespace-pre-line font-Montserrat text-res-head-2 text-blue-text lg:text-head-2">Human-centred innovation</h2></header>
        <figure className="py-[32px]">
            <Image src={"https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png"}  width={2206} height={727}  className="h-full w-full hidden md:block" alt="Image" /></figure>
            <PhilosophiesList/>
    </section>
  )
}
