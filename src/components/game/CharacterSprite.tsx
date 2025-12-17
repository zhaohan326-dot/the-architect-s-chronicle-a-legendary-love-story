import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '@/lib/constants';
import { cn } from '@/lib/utils';
interface CharacterSpriteProps {
  character: {
    id: string;
    asset: string;
    position: 'left' | 'center' | 'right';
  };
}
const positionClasses = {
  left: 'bottom-0 left-[-10%]',
  center: 'bottom-0 left-1/2 -translate-x-1/2',
  right: 'bottom-0 right-[-10%]',
};
export function CharacterSprite({ character }: CharacterSpriteProps) {
  const imageUrl = ASSETS.characters[character.asset] || ASSETS.characters.default;
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={cn(
        'absolute h-[90%] w-auto max-w-[40%]',
        positionClasses[character.position]
      )}
    >
      <img
        src={imageUrl}
        alt={character.id}
        className="h-full w-full object-contain drop-shadow-2xl"
        style={{ filter: 'saturate(1.1) contrast(1.05)' }}
      />
    </motion.div>
  );
}