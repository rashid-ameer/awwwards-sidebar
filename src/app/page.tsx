"use client";
import { motion, Variants } from "framer-motion";

export default function Home() {
  return (
    <main className="flex items-center justify-center">
      {/* <div
        className="bg-purple-200 rounded-2xl size-[400px] p-6"
        style={{
          // transformStyle: "preserve-3d",
          overflow: "hidden",
          perspective: 100,
          transformOrigin: "bottom",
          padding: "15vh 4vw",
        }}>
        <motion.div
          className="text-5xl"
          style={{
            opacity: 0,
            skewX: -90,
            rotateX: 90,
            translateY: "100%",
            translateX: "-4vw",
            lineHeight: "66px",
          }}
          animate={{
            opacity: 1,
            rotateX: 0,

            skewX: 0,
            translateX: 0,
            translateY: 0,

            transition: {
              opacity: { duration: 0.35 },
              duration: 0.65,
              ease: [0.215, 0.61, 0.355, 1],
            },
          }}>
          Projects
        </motion.div>
      </div> */}
    </main>
  );
}
