import React from 'react';
import { useGameStore } from '@/store/gameStore';
import { VisualNovelStage } from '@/components/game/VisualNovelStage';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { ASSETS } from '@/lib/constants';
import { ThemeToggle } from '@/components/ThemeToggle';
function TitleScreen() {
  const startGame = useGameStore((state) => state.startGame);
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center p-8 paper-texture bg-cover bg-center"
      style={{ backgroundImage: `url(${ASSETS.backgrounds.title})` }}
    >
      <ThemeToggle className="absolute top-4 right-4" />
      <div className="absolute inset-0 bg-background/30" />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center flex flex-col items-center"
      >
        <div className="p-8 bg-card/70 backdrop-blur-sm sketch-border">
          <h1 className="font-display text-6xl md:text-8xl text-foreground drop-shadow-lg">
            The Architect's Chronicle
          </h1>
          <p className="font-handwritten text-2xl md:text-3xl mt-4 text-muted-foreground">
            A Legendary Love Story
          </p>
        </div>
        <Button
          onClick={startGame}
          className="mt-12 font-handwritten text-3xl px-10 py-8 sketch-border-sm hover:animate-wiggle"
          size="lg"
        >
          Begin the Story
        </Button>
      </motion.div>
      <footer className="absolute bottom-4 text-center text-foreground/80 z-10 font-handwritten text-sm">
        <p>Built with ❤️ at Cloudflare</p>
      </footer>
    </div>
  );
}
export function HomePage() {
  const status = useGameStore((state) => state.status);
  return (
    <main className="w-screen h-screen bg-background overflow-hidden">
      <AnimatePresence mode="wait">
        {status === 'title' && (
          <motion.div
            key="title"
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.7 }}
          >
            <TitleScreen />
          </motion.div>
        )}
        {status === 'playing' && (
          <motion.div
            key="game"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full"
          >
            <VisualNovelStage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}