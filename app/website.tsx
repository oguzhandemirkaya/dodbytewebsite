"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export const HeroParallax = ({
  products,
}: {
  products: {
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0.020, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-200, 120]),
    springConfig
  );
  return (
    <div ref={ref} className={`py-60 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]`}>
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-2 mb-10">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-2">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-2">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="p-4 mx-auto relative z-10 w-full pt-4 md:pt-0 px-2 mt-26">
    <h1 className="text-4xl md:text-7xl text-center text-orange-500" style={{ color: '#FF6220' }}>
      Web & App Development <br />
    </h1>
    <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4"style={{ paddingTop: '40px' }}>
      We develop unique products with the latest technologies and frames.
      Dynamic, modern and aesthetic
    </p>
  </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      className="group product h-[24rem] w-[38rem] relative flex-shrink-0"
    >
      <Image
        src={product.thumbnail}
        height="800"
        width="1140"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt="Product Image"
      />
    </motion.div>
  );
};
