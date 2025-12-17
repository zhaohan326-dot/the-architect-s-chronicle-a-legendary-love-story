import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import type { Choice } from '@/data/script';
import { Button } from '@/components/ui/button';
interface ChoiceOverlayProps {
  choices: Choice[];
}
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export function ChoiceOverlay({ choices }: ChoiceOverlayProps) {
  const makeChoice = useGameStore((state) => state.makeChoice);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm z-20 p-8"
    >
      <div className="space-y-6">
        {choices.map((choice, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Button
              onClick={() => makeChoice(choice)}
              className="w-full max-w-md text-xl h-auto py-4 px-6 whitespace-normal sketch-border bg-card text-card-foreground hover:bg-secondary hover:-translate-y-1 hover:shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              {choice.text}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}