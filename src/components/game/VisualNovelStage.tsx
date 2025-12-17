import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { DialogueBox } from './DialogueBox';
import { CharacterSprite } from './CharacterSprite';
import { ChoiceOverlay } from './ChoiceOverlay';
import { ASSETS } from '@/lib/constants';
import { cn } from '@/lib/utils';
export function VisualNovelStage() {
  const getCurrentScene = useGameStore((state) => state.getCurrentScene);
  const scene = getCurrentScene();
  if (!scene) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-background paper-texture">
        <p className="font-handwritten text-2xl">Loading story...</p>
      </div>
    );
  }
  const backgroundUrl = ASSETS.backgrounds[scene.background] || ASSETS.backgrounds.default;
  return (
    <div className="relative w-full h-full overflow-hidden bg-black flex flex-col font-handwritten">
      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={scene.background}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundUrl})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/10" />
      {/* Characters */}
      <div className="flex-1 relative flex justify-center items-end">
        <AnimatePresence>
          {scene.characters.map((char) => (
            <CharacterSprite key={char.id} character={char} />
          ))}
        </AnimatePresence>
      </div>
      {/* Dialogue & Choices */}
      <div className="relative z-10">
        <DialogueBox key={scene.dialogue} scene={scene} />
        {scene.choices && <ChoiceOverlay choices={scene.choices} />}
      </div>
    </div>
  );
}