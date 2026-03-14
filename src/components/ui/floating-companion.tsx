"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingCompanion() {
  const { scrollY } = useScroll();
  const [aboutEnd, setAboutEnd] = useState(1200);

  useEffect(() => {
    function updateAboutBoundary() {
      const aboutSection = document.getElementById("about");

      if (!aboutSection) {
        return;
      }

      setAboutEnd(aboutSection.offsetTop + aboutSection.offsetHeight);
    }

    updateAboutBoundary();
    window.addEventListener("resize", updateAboutBoundary);
    window.addEventListener("load", updateAboutBoundary);

    return () => {
      window.removeEventListener("resize", updateAboutBoundary);
      window.removeEventListener("load", updateAboutBoundary);
    };
  }, []);

  const fadeStart = Math.max(360, aboutEnd - 160);
  const fadeEnd = aboutEnd + 40;
  const opacity = useTransform(scrollY, [140, 320, fadeStart, fadeEnd], [0, 1, 1, 0]);
  const x = useTransform(scrollY, [140, 320, fadeStart, fadeEnd], [140, 0, 0, 120]);
  const y = useTransform(scrollY, [140, 320, fadeStart, fadeEnd], [40, 0, 0, -28]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed right-[-1.5rem] top-[16%] z-40 hidden md:block"
      style={{ opacity, x, y }}
    >
      <motion.div
        animate={{ y: [0, -16, 0], rotate: [0, -2, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative h-[18rem] w-[16rem] lg:h-[22rem] lg:w-[20rem] xl:h-[25rem] xl:w-[24rem]"
      >
        <div className="absolute right-8 top-10 h-40 w-40 rounded-full bg-glow/18 blur-3xl" />
        <div className="absolute bottom-8 left-6 rounded-full border border-white/10 bg-surface/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-ink shadow-panel backdrop-blur-xl">
          Hi there!
        </div>
        <Image
          src="/images/bmax1.png"
          alt=""
          fill
          sizes="(max-width: 1279px) 320px, 384px"
          className="object-contain object-right drop-shadow-[0_30px_70px_rgba(5,10,24,0.45)]"
        />
      </motion.div>
    </motion.div>
  );
}
