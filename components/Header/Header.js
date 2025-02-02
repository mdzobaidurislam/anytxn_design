"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-transparent text-white max-lg:bg-blue-main max-lg:py-8 top-0 lg:absolute w-full lg:pt-[17px] lg:pb-[25px] text-res-body-p1 lg:text-body-p1 z-[9999]">
      <div id="main-navigation" className="relative z-[9999]">
        <div className="container flex items-center flex-wrap justify-between">
          <h1>
            <Link href="/en" aria-label="Go to home page" rel="home">
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?auto=format"
                alt="AnyTech"
                width={200}
                height={32}
                className="w-[134px] h-auto object-contain lg:w-[170px]"
                sizes="134px, (min-width: 1024px) 170px"
              />
            </Link>
          </h1>

          <div className="flex items-center">
            {/* Desktop Menu */}
            <nav className="desktop-menu max-lg:hidden" aria-label="Main navigation desktop">
              <ul className="flex">
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer !border-none">
                  <span className="flex items-center justify-between">
                    <span>Solutions</span>
                    <svg
                      className="ml-2 mt-1 fill-white"
                      width="9"
                      height="6"
                      viewBox="0 0 9 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z" />
                    </svg>
                  </span>
                  <span className="lg:absolute lg:top-full lg:bg-white lg:w-[240px] relative shadow-menu lg:text-blue-text rounded-xs hidden lg:group-hover:block">
                    <ul className="flex flex-col relative lg:-mt-[1px] max-lg:mt-6">
                      <li className="lg:border-t border-blue-light whitespace-nowrap first:border-none">
                        <Link
                          href="/en/solutions/anycaas"
                          className="hover:text-blue-main hover:transition-colors duration-200 py-3 lg:pl-[15px] pl-4 max-lg:pr-5 inline-block"
                        >
                          <span className="flex res-body-p0 lg:text-body-p1">
                            <svg
                              className="w-2 -rotate-90 fill-theme-muted mr-2 lg:hidden"
                              width="9"
                              height="6"
                              viewBox="0 0 9 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z" />
                            </svg>
                            AnyCaaS
                          </span>
                        </Link>
                      </li>
                      <li className="lg:border-t border-blue-light whitespace-nowrap first:border-none">
                        <Link
                          href="/en/solutions/anybaas"
                          className="hover:text-blue-main hover:transition-colors duration-200 py-3 lg:pl-[15px] pl-4 max-lg:pr-5 inline-block"
                        >
                          <span className="flex res-body-p0 lg:text-body-p1">
                            <svg
                              className="w-2 -rotate-90 fill-theme-muted mr-2 lg:hidden"
                              width="9"
                              height="6"
                              viewBox="0 0 9 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z" />
                            </svg>
                            AnyBaaS
                          </span>
                        </Link>
                      </li>
                      <li className="lg:border-t border-blue-light whitespace-nowrap first:border-none">
                        <Link
                          href="/en/solutions/anypaas"
                          className="hover:text-blue-main hover:transition-colors duration-200 py-3 lg:pl-[15px] pl-4 max-lg:pr-5 inline-block"
                        >
                          <span className="flex res-body-p0 lg:text-body-p1">
                            <svg
                              className="w-2 -rotate-90 fill-theme-muted mr-2 lg:hidden"
                              width="9"
                              height="6"
                              viewBox="0 0 9 6"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M4.35156 5.27344C4.5625 5.48438 4.91406 5.48438 5.125 5.27344L8.3125 2.08594C8.54688 1.85156 8.54688 1.5 8.3125 1.28906L7.79688 0.75C7.5625 0.539062 7.21094 0.539062 7 0.75L4.72656 3.02344L2.47656 0.75C2.26562 0.539062 1.91406 0.539062 1.67969 0.75L1.16406 1.28906C0.929688 1.5 0.929688 1.85156 1.16406 2.08594L4.35156 5.27344Z" />
                            </svg>
                            AnyPaaS
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </span>
                </li>
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                  <span className="flex items-center justify-between">
                    <Link href="/en/services">Services</Link>
                  </span>
                </li>
                <li className="w-full whitespace-nowrap group lg:py-3 lg:px-6 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
                  <span className="flex items-center justify-between">
                    <Link href="/en/about-us">About Us</Link>
                  </span>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
              className="cursor-pointer lg:hidden"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="fill-white"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 2C0 0.895431 0.895431 0 2 0H18V2H0Z" />
                <rect y="7" width="18" height="2" />
                <path d="M0 14H18V16H2C0.89543 16 0 15.1046 0 14Z" />
              </svg>
            </button>
          </div>

          {/* Contact Us Link */}
          <Link
            href="/en/contact-us"
            className="border border-white bg-transparent hover:bg-white hover:text-blue-main hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs"
          >
            Contact Us
            <svg
              className="fill-white translate-x-3.5 transition-transform group-hover/highlight:translate-x-5 group-hover/highlight:fill-blue-main"
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.67969 5.89844L2.13281 10.4688C1.89844 10.6797 1.54688 10.6797 1.33594 10.4688L0.796875 9.92969C0.585938 9.71875 0.585938 9.36719 0.796875 9.13281L4.40625 5.5L0.796875 1.89062C0.585938 1.65625 0.585938 1.30469 0.796875 1.09375L1.33594 0.554688C1.54688 0.34375 1.89844 0.34375 2.13281 0.554688L6.67969 5.125C6.89062 5.33594 6.89062 5.6875 6.67969 5.89844Z" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu */}
        <nav
          className={`lg:hidden absolute top-full left-0 w-full bg-blue-main transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          aria-label="Main navigation mobile"
        >
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/en/solutions" className="text-white hover:text-blue-light">
                Solutions
              </Link>
            </li>
            <li>
              <Link href="/en/services" className="text-white hover:text-blue-light">
                Services
              </Link>
            </li>
            <li>
              <Link href="/en/about-us" className="text-white hover:text-blue-light">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/en/contact-us" className="text-white hover:text-blue-light">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;