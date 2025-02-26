'use client';
import Navbar from "@/components/ui/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image"; 
import Link from "next/link";
import SliderOne from "@/components/ui/slider";
import { ParallaxScroll } from "@/app/graphic-design";
import { HeroParallax } from "./website";
import React, { useRef } from 'react';
import { ThreeDCardExample } from "./snipped/3d-card-snippet";
import { EvervaultCardSnippet } from "./snipped/evervault-card-snippet";
import '../app/globals.css';
import Services from "./snipped/services";
import { LampDemo } from "./snipped/lamp-snippet";
import { ParallaxScrollm } from "./tsxgraphic-design-mobile";
import SliderMobile from "@/components/ui/slider";
import Head  from "next/head";



export default function Home() {
  const graphicDesignRef = useRef<HTMLDivElement>(null);
  const websiteDesignRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToGraphicDesign = () => {
    graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToWebsiteDesigns = () => {
    websiteDesignRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
// Parallax image 
  const images = [
    "/images/_001.webp",
    "/images/_002.webp",
    "/images/_003.webp",
    "/images/_004.webp",
    "/images/_005.webp",
    "/images/_006.webp",
    "/images/_007.webp",
    "/images/_008.webp",
    "/images/_009.webp",
    "/images/_010.webp",
    "/images/M001.webp",
    "/images/M002.webp",
  ];
//website image
  const products = [
   { thumbnail: "/images/web (8).webp" },
   { thumbnail: "/images/web (11).webp" },
   { thumbnail: "/images/web (3).webp" },
   { thumbnail: "/images/web (4).webp" },
   { thumbnail: "/images/web (5).webp" },
   { thumbnail: "/images/web (13).webp" },
   { thumbnail: "/images/web (9).webp" },
   { thumbnail: "/images/web (2).webp" },
   { thumbnail: "/images/web (7).webp" },
   { thumbnail: "/images/web (10).webp" },
   { thumbnail: "/images/web (9).webp" },
   { thumbnail: "/images/web (14).webp" },
   { thumbnail: "/images/web (6).webp" },
   { thumbnail: "/images/web (11).webp" },

  ];

  return (
    <>
  
    <div>
    
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={scrollToWebsiteDesigns}
        scrollToGraphicDesign={scrollToGraphicDesign}
        scrollToServices={scrollToServices}
      />
      <Spotlight className="hidden md:flex left-80" fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <div className="text-3xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          #thinkdevelopshare <br />
          <span style={{ color: '#FF6220', fontSize: '4rem' }}>
            <strong style={{ fontSize: '3rem' }}>scale your business</strong>
          </span>
        </div>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom solutions for your business growth. Our creative team is here to help you succeed.
        </p>
        <Link href="/contact" className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white transition-colors duration-300 ease-in-out hover:bg-[#ff6220] hover:text-white">
    Book a call
</Link>

<div className="w-full pt-10">
  <SliderOne />
</div>



        <div ref={graphicDesignRef}className="text-white">
          <div className="p-20 mx-auto relative z-10 w-full pt-4 md:pt-0 px-2 "style={{ paddingTop: '190px' }}> 
            <div className="text-4xl md:text-7xl text-center text-orange-500" style={{ color: '#FF6220' }}>
           Graphic Design Solutions <br /> for Your Brand
            </div>
            <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4" style={{ paddingTop: '30px' }}> 
            Elevate your brand with our expert logo designs, dynamic social media posts, and striking web and mobile design elements that tell your visual story.
            </p>
          </div>
        </div>
        <div className="hidden md: items-center md:flex justify-center md:mx-auto md:space-x-10" style={{ paddingTop: '30px' }}>
  <ParallaxScroll images={images} className="my-4" />
</div>

<div className="md:hidden" style={{ paddingTop: '31px' }}>
  <ParallaxScrollm images={images} className="my-4" />
</div>



      </div>
      <div ref={websiteDesignRef}>
        <HeroParallax products={products} />       
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4" style={{ paddingTop: '30px' }}> 
      By merging design with technology, we create interactive experiences. With just a hover, colors and shapes come alive, showcasing your brand’s creativity in the digital realm.
            </p>
      <div className="items-center md:flex justify-center md:mx-auto md:space-x-20 px-8">
        <div className="flex-1/2">
          <ThreeDCardExample />
        </div>
        <div className="flex-1/2 ">
          <EvervaultCardSnippet />
        </div>
      </div>
      <div ref={servicesRef}>
        <Services />
        
      </div>
      <div className="hidden md: items-center md:flex justify-center md:mx-auto md:space-x-10" style={{ paddingTop: '30px' }}>
  <LampDemo />
</div>

<div className="text-3xl md:text-7xl text-center text text-orange-500 md:hidden" style={{ color: '#FF6220'}}>
  <span className="mb-4">Let&apos;s build together</span>
  <div className=" pt-3 mx-auto border-b-2 border-orange-500"></div>
 <p className="mt-4 text-sm font-normal text-neutral-300 w-90 text-center flex-auto px-4 pb-8" style={{ paddingTop: '6px', letterSpacing: '2px' }}> 
    Grow your business with dodbye creative studio solutions by getting in touch now
  </p>
  <div className="px-10 cursor-pointer inline-block border rounded-full py-2 text-lg text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black" style={{ letterSpacing: '1px', marginBottom: '100px' }}>
    <span onClick={() => window.location.href = '/contact'} className="cursor-pointer">
      Book a call
    </span>
  </div>
</div>

    </div>
    </div>
    </>
  );
}
