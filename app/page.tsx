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

  const images = [
    "/images/_001.webp",
    "/images/_002.webp",
    "/images/_003.webp",
    "/images/_004.webp",
    "/images/_008.webp",
    "/images/_009.webp",
    "/images/_010.webp",
    "/images/_005.webp",
    "/images/_006.webp",
    "/images/_007.webp",
    "/images/_010.webp",
    "/images/_010.webp",
  ];

  const products = [
    { thumbnail: "/images/c1s.png" },
    { thumbnail: "/images/l1s.png" },
    { thumbnail: "/images/j1s.png" },
    { thumbnail: "/images/a1s.png" },
    { thumbnail: "/images/g1s.png" },
    { thumbnail: "/images/t1s.png" },
    { thumbnail: "/images/f1s.png" },
    { thumbnail: "/images/o1s.png" },
    { thumbnail: "/images/f1s.png" },
    { thumbnail: "/images/l1s.png" },
  ];

  return (
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
        <Link href={"/book"} className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 mx-auto my-6 text-white">
          Book a call
        </Link>
        <div className="w-full pt-10">
          <SliderOne />
        </div>
        <div className="text-white">
          <div className="p-20 mx-auto relative z-10 w-full pt-4 md:pt-0 px-2 "style={{ paddingTop: '190px' }}> 
            <div className="text-4xl md:text-7xl text-center text-orange-500" style={{ color: '#FF6220' }}>
              Graphic Design <br /> that works
            </div>
            <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4" style={{ paddingTop: '30px' }}> 
              Creating unique
            </p>
          </div>
        </div>
        <div ref={graphicDesignRef} style={{ paddingTop: '40px' }}>
  <ParallaxScroll images={images} className="my-4" />
</div>

      </div>
      <div ref={websiteDesignRef}>
        <HeroParallax products={products} />       
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4" style={{ paddingTop: '30px' }}> 
              Creating uniqueCreating uniqueCreating uniqueCreating uniqueCreating uniqueCreating uniqueCreating uniqueCreating uniqueCreating uniqueCreating uniqueCreating unique
            </p>
      <div className="items-center md:flex justify-center md:mx-auto md:space-x-20">
        <div className="flex-1/2">
          <ThreeDCardExample />
        </div>
        <div className="flex-1/2">
          <EvervaultCardSnippet />
        </div>
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div>
        <LampDemo />
      </div>
    </div>
  );
}

