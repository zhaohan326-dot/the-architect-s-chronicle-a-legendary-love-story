import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { X, BookOpen, Star, Heart } from 'lucide-react';
interface PlaybookOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}
export function PlaybookOverlay({ isOpen, onClose }: PlaybookOverlayProps) {
  const history = useGameStore((state) => state.history);
  const stats = useGameStore((state) => state.stats);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl h-[80vh] bg-card paper-texture sketch-border p-6 flex flex-col font-handwritten"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-display text-4xl flex items-center gap-2">
                <BookOpen className="w-8 h-8" /> The Playbook
              </h2>
              <Button variant="ghost" size="icon" onClick={onClose}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4 text-center">
              <div className="bg-secondary p-3 sketch-border-sm">
                <h3 className="font-display text-2xl flex items-center justify-center gap-2"><Star className="text-yellow-500"/> Legendary</h3>
                <p className="text-4xl font-bold">{stats.legendary}</p>
              </div>
              <div className="bg-secondary p-3 sketch-border-sm">
                <h3 className="font-display text-2xl flex items-center justify-center gap-2"><Heart className="text-red-500"/> Romantic</h3>
                <p className="text-4xl font-bold">{stats.romantic}</p>
              </div>
            </div>
            <h3 className="font-display text-2xl mb-2">Dialogue History</h3>
            <ScrollArea className="flex-1 bg-secondary/50 p-4 sketch-border-sm">
              <div className="space-y-4">
                {history.map((entry, index) => (
                  <div key={index}>
                    <p className="font-bold text-lg">{entry.speaker}:</p>
                    <p className="text-lg pl-4">"{entry.dialogue}"</p>
                  </div>
                ))}
                 {history.length === 0 && <p className="text-muted-foreground text-center p-8">The story has just begun...</p>}
              </div>
            </ScrollArea>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}