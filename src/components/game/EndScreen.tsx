import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { Button } from '@/components/ui/button';
import { ASSETS } from '@/lib/constants';
export function EndScreen() {
  const goToTitle = useGameStore((state) => state.goToTitle);
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center p-8 paper-texture bg-cover bg-center"
      style={{ backgroundImage: `url(${ASSETS.backgrounds.title})` }}
    >
      <div className="absolute inset-0 bg-background/50" />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <div className="p-8 bg-card/80 backdrop-blur-sm sketch-border">
          <h1 className="font-display text-6xl md:text-8xl text-foreground drop-shadow-lg">
            To Be Continued...
          </h1>
          <p className="font-handwritten text-2xl md:text-3xl mt-4 text-muted-foreground">
            Thanks for playing the pilot episode!
          </p>
        </div>
        <Button
          onClick={goToTitle}
          className="mt-12 font-handwritten text-3xl px-10 py-8 sketch-border-sm hover:animate-wiggle"
          size="lg"
        >
          Back to Title
        </Button>
      </motion.div>
    </div>
  );
}