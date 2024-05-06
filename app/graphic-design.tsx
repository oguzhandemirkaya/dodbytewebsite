"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { cn } from "../components/ui/utils/cn";
import '@/components/style.css';

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll(); // Global scroll kullanılıyor.

  // Görsellerin translate değerlerini scroll'a bağlı olarak ayarla
  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const translateYSecond = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("items-start w-full custom-scrollbar", className)}
      ref={gridRef}
      style={{ height: "100vh" }} // Yüksekliği artırıldı
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateYFirst }}
              key={"first-" + idx}
            >
              <Image
                src={el}
                className="h-140 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="800"
                width="800"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: translateYSecond }}
              key={"second-" + idx}
            >
              <Image
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateYThird }}
              key={"third-" + idx}
            >
              <Image
                src={el}
                className="h-120 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
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
