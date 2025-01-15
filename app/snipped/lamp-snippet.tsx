"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: -20 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-3 bg-gradient-to-br from-orange-50 to-orange-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        style={{ marginTop: "-0rem"}} // Düzeltildi
      >
        <div className="flex flex-col items-center">
          <span className="mb-4">Let&apos;s build together</span>
          <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4 pb-5" style={{ paddingTop: '30px', letterSpacing: '2px' }}>
            Grow your business with dodbye creative studio solutions by getting in touch now
          </p>
          <div className="cursor-pointer inline-block border rounded-full px-4 py-2 text-lg text-white transition-colors duration-300 ease-in-out hover:bg-white hover:text-black" style={{ letterSpacing: '1px' }}>
            <span onClick={() => window.location.href = '/contact'} className="cursor-pointer">
              Book a call
            </span>
          </div>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
