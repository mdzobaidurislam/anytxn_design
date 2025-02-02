import Image from 'next/image';
import React from 'react'

const imagesData = [
    {
      id: 1,
      src: "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&fm=webp",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&fm=webp",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&fm=webp",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&fm=webp",
      alt: "Image 5",
    },
    {
      id: 6,
      src: "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&fm=webp",
      alt: "Image 6",
    },
    {
      id: 7,
      src: "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&fm=webp",
      alt: "Image 7",
    },
    {
      id: 8,
      src: "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&fm=webp",
      alt: "Image 8",
    },
    {
      id: 9,
      src: "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp",
      alt: "Image 9",
    },
    {
      id: 10,
      src: "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
      alt: "Image 10",
    },
    {
      id: 11,
      src: "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp",
      alt: "Image 11",
    },
    {
      id: 12,
      src: "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&fm=webp",
      alt: "Image 12",
    },
    {
      id: 13,
      src: "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&fm=webp",
      alt: "Image 13",
    },
    {
      id: 14,
      src: "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&fm=webp",
      alt: "Image 14",
    },
    {
      id: 15,
      src: "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp",
      alt: "Image 15",
    },
  ];

export default function Company() {
  return (
    <div className='mt-xl grid grid-cols-3 gap-x-16 gap-y-[34px] max-md:hidden lg:grid-cols-5'>

{imagesData.map((image) => (
        <div key={image.id} className="image-item flex items-center justify-center object-cover image">
          <Image
          width={603}
          height={414}
            src={image.src}
            alt={image.alt}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
