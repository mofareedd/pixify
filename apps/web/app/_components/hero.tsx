'use client';
import { motion } from 'framer-motion';
import { AuroraBackground } from './aurora-background';
import { ShinyButton } from './shiny-button';

export function Hero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Design Your Dream Logo with AI
        </div>
        <p className="font-extralight text-center text-base md:text-xl dark:text-neutral-200 py-4">
          Pixify turns your vision into professional logo designs, instantly and
          effortlessly. No design skills required!
        </p>
        {/* <Button className="bpx-4 py-2">Debug now</Button> */}
        <ShinyButton>Coming Soon</ShinyButton>
      </motion.div>
    </AuroraBackground>
  );
}
