"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";


export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
  initial={{ opacity: 0.5, y: 100 }}
  whileInView={{ opacity: 1, y: -120 }}
  transition={{
    delay: 0.3,
    duration: 0.8,
    ease: "easeInOut",
  }}
  className="mt-3 bg-gradient-to-br from-orange-50 to-orange-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
  style={{ marginTop: "+8rem"}} // lamba yüksekliği
>
        Let&apos;s build together
      </motion.h1>
    </LampContainer>
    
  );
}
