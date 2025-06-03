import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Waves from "../components/Waves";
import Orb from "../components/Orb";

function Home() {
  const hello = ["H", "E", "L", "L", "O"];
  const world = ["W", "O", "R", "L", "D"];

  // Animation variants for each letter
  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (index: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.2,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
  };

  // Animation variants for overlays
  const overlayVariants = {
    hidden: { y: 0, opacity: 0 },
    visible: (index: number) => ({
      y: index % 2 === 0 ? 100 : -100,
      opacity: 1,
      transition: {
        delay: index * 0.2,
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    }),
  };

  // To make the animation repeat, we use a key that changes every 5 seconds
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 5000); // Repeat every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden"
      key={key}
    >
      {localStorage.getItem("theme") === "dark" ? (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Orb
            hoverIntensity={5}
            rotateOnHover={false}
            hue={40}
            forceHoverState={true}
          />
        </div>
      ) : (
        <div className="absolute inset-0 pointer-events-none">
          <Waves
            lineColor="rgba(15, 25, 125, 0.8)"
            backgroundColor="rgba(255, 255, 255, 0.9)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />
        </div>
      )}

      {/* Text */}
      <div className="absolute flex flex-col items-center justify-center w-full h-full z-10">
        {/* HELLO row */}
        <div className="flex gap-2 md:gap-5 mb-2 md:mb-5">
          {hello.map((letter, index) => (
            <motion.div
              key={`hello-${index}`}
              className="relative flex items-center justify-center w-[45px] h-[40px] lg:w-[160px]  lg:h-[150px] font-bold lg:text-5xl bg-[#3aa5fd] hover:bg-[#0f0f0f] backdrop-blur-3xl overflow-hidden"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={index}
            >
              <span className="text-white z-10">{letter}</span>
              <motion.span
                className="absolute inset-0 flex items-center justify-center bg-[#0f0f0f] text-white"
                variants={overlayVariants}
                initial="visible"
                animate="hidden"
                custom={index}
              >
                {letter}
              </motion.span>
            </motion.div>
          ))}
        </div>
        {/* WORLD row */}
        <div className="flex gap-2 md:gap-5 mb-2 md:mb-5">
          {world.map((letter, index) => (
            <motion.div
              key={`world-${index}`}
              className="relative flex items-center justify-center w-[45px] h-[40px] lg:w-[160px]  lg:h-[150px] font-bold lg:text-5xl bg-transparent hover:bg-[#0f0f0f] backdrop-blur-3xl overflow-hidden"
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              custom={index + hello.length}
            >
              <span className="text-white z-10">{letter}</span>
              <motion.span
                className="absolute inset-0 flex items-center justify-center bg-[#0f0f0f] text-white"
                variants={overlayVariants}
                initial="visible"
                animate="hidden"
                custom={index + hello.length}
              >
                {letter}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
