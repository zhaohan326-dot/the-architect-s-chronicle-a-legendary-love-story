import React from 'react';
import { motion } from 'framer-motion';
import { useGameStore } from '@/store/gameStore';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Star, Heart, BookOpen, Save, Home } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
interface GameHeaderProps {
  onTogglePlaybook: () => void;
}
export function GameHeader({ onTogglePlaybook }: GameHeaderProps) {
  const stats = useGameStore((state) => state.stats);
  const saveGame = useGameStore((state) => state.saveGame);
  const goToTitle = useGameStore((state) => state.goToTitle);
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="absolute top-0 left-0 right-0 z-20 p-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-card/70 backdrop-blur-sm p-2 sketch-border-sm">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-secondary px-3 py-1 rounded-md">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="font-bold text-lg">{stats.legendary}</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary px-3 py-1 rounded-md">
            <Heart className="w-5 h-5 text-red-500" />
            <span className="font-bold text-lg">{stats.romantic}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={onTogglePlaybook}><BookOpen /></Button>
              </TooltipTrigger>
              <TooltipContent><p>Playbook</p></TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={saveGame}><Save /></Button>
              </TooltipTrigger>
              <TooltipContent><p>Save Game</p></TooltipContent>
            </Tooltip>
             <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={goToTitle}><Home /></Button>
              </TooltipTrigger>
              <TooltipContent><p>Title Screen</p></TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <ThemeToggle className="relative top-0 right-0" />
        </div>
      </div>
    </motion.div>
  );
}