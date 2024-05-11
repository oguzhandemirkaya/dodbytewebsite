"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../components/ui/utils/cn";
import '@/components/style.css';
import { ThreeDCardExample } from "./snipped/3d-card-snippet";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [10, 50]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={cn("parallax-scroll-container h-[40rem] items-start overflow-y-auto mx-auto md:w-3/5 w-full", className)}
      ref={gridRef}
    >
      <style>
        {`
          .parallax-scroll-container::-webkit-scrollbar {
            width: 8px; /* Default scrollbar width */
          }
          .parallax-scroll-container::-webkit-scrollbar-track {
            background: #000000; /* Track color */
          }
          .parallax-scroll-container::-webkit-scrollbar-thumb {
            background: #f1f1f1; /* Thumb color */
            border-radius: 3px; /* Rounded corners for the thumb */
          }
          .parallax-scroll-container::-webkit-scrollbar-thumb:hover {
            background: #f1f1f1; /* Light grey on hover */
          }

          /* Media query for devices with a width up to 768 pixels */
          @media (max-width: 768px) {
            .parallax-scroll-container::-webkit-scrollbar {
              width: 1px; /* Narrower scrollbar for mobile devices */
            }
          
         
        `}
      </style>
      <div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto lg:gap-10 md:gap-3 gap-3"
        style={{ paddingRight: '10px' }}  // İçerik alanına da padding ekledim
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }}
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-120 w-full object-cover object center rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-140 w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                src={el}
                className="h-120 w-full object-cover object-center rounded-lg gap-50 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
