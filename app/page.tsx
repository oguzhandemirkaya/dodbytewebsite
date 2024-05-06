/* eslint-disable react/jsx-no-undef */
import Navbar from "@/components/ui/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image"; 
import Link from "next/link";
import SliderOne from "@/components/ui/slider";
import { ParallaxScroll } from "@/app/graphic-design";
import { HeroParallax } from "./website";

export default function Home() {


    // Resimler dizisi, public/images klasöründeki resimlerle
    const images = [
      "/images/parallax1.webp",
      "/images/parallax2.webp",
      "/images/parallax3.webp",
      "/images/parallax4.webp",
      "/images/parallax5.webp",
      "/images/parallax6.webp",
      "/images/parallax7.webp",
      "/images/parallax8.webp",
      "/images/parallax9.webp",
      "/images/parallax6.webp",
      "/images/parallax7.webp",
      "/images/parallax8.webp",
      "/images/parallax9.webp",
      "/images/parallax6.webp",
      "/images/parallax7.webp",
      "/images/parallax8.webp",
      "/images/parallax9.webp",
    ];


      const products = [
        {thumbnail: "/images/c1s.png" },
        {thumbnail: "/images/l1s.png" },
        {thumbnail: "/images/j1s.png" },
        {thumbnail: "/images/a1s.png" },
        {thumbnail: "/images/g1s.png" },
        {thumbnail: "/images/t1s.png" },
        {thumbnail: "/images/f1s.png" },
        {thumbnail: "/images/o1s.png" },
        {thumbnail: "/images/f1s.png" },
        {thumbnail: "/images/l1s.png" },
       
      ];
  return (
    <div className="w-full md:items-center md:justify-center 
    bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
  <Navbar />
  <Spotlight 
  className="hidden md:flex left-80" 
  fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  
        bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to
         bg-neutral-400 bg-opacity-50">
          #thinkdevelopshare <br />
          <span style={{color: '#FF6220', fontSize: '4rem'}}>
            <strong>scale your business</strong>
          </span>
        </div>
        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
        Custom solutions for your business growth. Our creative team is here to help you succeed.
        </p>

      <Link
      href={"/book"}
      className="cursor-pointer flex items-center 
      justify-center border rounded-full w-48 p-2  mx-auto my-6 text-white"
      >
        Book a call
      </Link>

      <div className="w-full pt-20">
        <SliderOne />

      </div>  
      
      <div className="text-white">
  <div className="p-4 mx-auto relative z-10 w-full pt-4 md:pt-0 px-2 "> 
    <div className="text-4xl md:text-7xl text-center bg-clip-text 
    text-transparent bg-gradient-to-b from-orange-500 to-sky-200 ">
      Graphic Design <br /> that works
    </div>
    <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
      Creating unique
    </p>
  </div>
</div>
<div>
  <ParallaxScroll images={images} className="my-4" /> {/* my-12'i my-4 olarak değiştirdim */}
</div>

<div>
  <HeroParallax products={products} />
</div>



    </div>
   </div>
   
   
  );

}

