import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="bg-[#002045]">
                    <div className="container flex items-center justify-between py-11">
                        <a href="/en">
                            <img src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg" width="200" height="32" data-x-lqip="false" data-x-lqip-transition-duration="0" loading="lazy" style={{ "width": "100%", "height": "auto", "objectFit": "cover" }} className="!w-[127px]  !object-contain" alt="AnyTech" />
                        </a>
                        <div className="hidden items-center text-[#00E9EA] lg:flex">
                            <p className="border-r border-blue-dark px-6 py-4 text-res-body-p1-semibold lg:text-body-p1-semibold">
                                Our Solutions
                            </p>
                            <ul className="flex items-center">
                                <li>
                                    <a className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1" href="/en/solutions/anycaas">
                                        AnyCaaS
                                    </a>
                                </li><li>
                                    <a className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1" href="/en/solutions/anybaas">
                                        AnyBaaS
                                    </a>
                                </li><li>
                                    <a className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-blue-main lg:text-body-p1" href="/en/solutions/anypaas">
                                        AnyPaaS
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='flex gap-6 lg:hidden lg:gap-10'>
                            <Link href="https://www.linkedin.com/company/anytxn" className='flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold'>
                            <Image alt='icon' src="https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg"  loading="lazy" width={16} height={12} />
                            </Link>

                            <Link href="https://www.linkedin.com/company/anytxn" className='flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold'>
                            <Image alt='icon' width={16} height={12} src="https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=320&fm=webp"  loading="lazy" />
                            </Link>

                            <Link href="https://www.linkedin.com/company/anytxn" className='flex items-center text-res-body-p1-semibold text-blue-main transition-opacity duration-300 hover:opacity-70 lg:text-body-p1-semibold'>
                            <Image alt='icon' src="https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=320&fm=webp" width={16} height={12}  loading="lazy" />
                            </Link>




                        </div>


                    </div>

                </div>
                <div className="border-b border-blue-dark"></div>
                <div className="bg-[#00152D]">
                    <div className="container flex flex-col items-center justify-between py-6 text-res-body-p2 text-blue-main lg:flex-row lg:text-body-p2">
                        <p>
                            <strong>©2023 All rights reserved</strong>. Any Technology Pte Ltd.
                        </p>
                        <div className="flex items-center gap-[14px] max-lg:mt-4">

                            <div>
                                <a className="transition-colors duration-300 hover:text-blue-highlight" href="/en/privacy-policy">
                                    Privacy Policy
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
