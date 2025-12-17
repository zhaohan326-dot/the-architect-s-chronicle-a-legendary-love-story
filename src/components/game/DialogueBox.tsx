import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import type { Scene } from '@/data/script';
import { Button } from '@/components/ui/button';
import { ArrowRightCircle } from 'lucide-react';
interface DialogueBoxProps {
  scene: Scene;
}
export function DialogueBox({ scene }: DialogueBoxProps) {
  const [displayedText, setDisplayedText] = useState('');
  const advanceScene = useGameStore((state) => state.advanceScene);
  const isFinished = displayedText.length === scene.dialogue.length;
  useEffect(() => {
    setDisplayedText('');
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(scene.dialogue.slice(0, i + 1));
      i++;
      if (i >= scene.dialogue.length) {
        clearInterval(intervalId);
      }
    }, 30);
    return () => clearInterval(intervalId);
  }, [scene.dialogue]);
  const handleAdvance = () => {
    if (!isFinished) {
      setDisplayedText(scene.dialogue);
    } else if (scene.nextScene && !scene.choices) {
      advanceScene(scene.nextScene);
    }
  };
  const speaker = scene.speaker || scene.narrator;
  return (
    <motion.div
      initial={{ y: '100%' }}
      animate={{ y: '0%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="p-6 bg-card/80 backdrop-blur-sm border-t-4 border-foreground/30"
      onClick={handleAdvance}
    >
      <div className="max-w-4xl mx-auto">
        {speaker && (
          <div className="mb-2">
            <div className="inline-block bg-secondary px-4 py-1 sketch-border-sm">
              <p className="text-2xl font-bold text-secondary-foreground">{speaker}</p>
            </div>
          </div>
        )}
        <p className="text-2xl min-h-[7rem] leading-relaxed text-foreground">
          {displayedText}
          {!isFinished && <span className="inline-block w-2 h-6 bg-foreground/70 ml-1 animate-pulse" />}
        </p>
        {isFinished && scene.nextScene && !scene.choices && (
          <div className="text-right mt-2">
            <Button variant="ghost" size="icon" className="animate-pulse">
              <ArrowRightCircle className="w-8 h-8" />
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}