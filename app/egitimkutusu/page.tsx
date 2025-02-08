"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/ui/navbar";
import { motion } from "framer-motion";

const PASSWORD = "hakan";

const EgitimKutusu = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    if (passwordInput === PASSWORD) {
      localStorage.setItem("isAuthenticated", "true");
      setShowAnimation(true);
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 2000);
    } else {
      alert("Hatalı şifre, tekrar deneyin!");
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {!isAuthenticated ? (
        !showAnimation ? (
          <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h1 className="text-2xl font-bold mb-4">Şifre Girin</h1>
            <input
            type="password"
             className="px-4 py-2 border rounded text-black"
             placeholder="Şifreyi Girin"
             value={passwordInput}
             onChange={(e) => setPasswordInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()} // ⬅ Enter tuşuna basınca giriş yap
            />

         
            <button
              onClick={handleLogin}
              className="mt-4 px-6 py-2 bg-[#ff6220] text-white rounded transition hover:bg-[#e5531d]"
            >
              Giriş Yap
            </button>
          </div>
        ) : (
          // 🎬 Giriş başarılı animasyonu
          <motion.div
            className="flex flex-col items-center justify-center min-h-screen bg-black text-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <motion.img
              src="/logo/logo.svg"
              alt="Logo"
              className="w-48 h-48"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {/* 🌟 Logonun altından geçen ışık efekti */}
            <motion.div
              className="h-1 w-48 bg-gradient-to-r from-transparent via-white to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <motion.p
              className="text-lg mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Giriş Başarılı...
            </motion.p>
          </motion.div>
        )
      ) : (
        // 📌 Sayfa içeriği
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundColor: "#000",
            backgroundImage: `
              radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 1) 100%)
            `,
            backgroundSize: "12px 8px",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Navbar En Üste */}
          <header className="w-full fixed top-0 left-0 z-50">
          <Navbar
  scrollToGraphicDesign={() => {}}
  scrollToWebsiteDesign={() => {}}
  scrollToServices={() => {}}
/>

          </header>

          {/* İçerik */}
          <div className="flex flex-col items-center justify-center min-h-screen  pt-10 mt-5 w-full">
           <h3 className="font-bold mb-2 sm:mb-1 text-[15pt] sm:text-[20pt]">
            egitimkutusu.com düzenleme & bilinmesi gerekenler
           </h3>
         <video
           controls
            className="w-full max-w-5xl h-auto sm:h-[80vh] rounded-lg shadow-lg mt-0 sm:mt-0"
             >
          <source src="/videolar/egitim-video.mp4" type="video/mp4" />
           Tarayıcınız video etiketini desteklemiyor.
           </video>
          </div>
        </div>
      )}
    </>
  );
};

export default EgitimKutusu;
