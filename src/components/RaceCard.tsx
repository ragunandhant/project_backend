import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Sun } from 'lucide-react';
import Link from 'next/link';
import type { Race } from '../types';

interface RaceCardProps {
  race: Race;
  index: number;
}

export const RaceCard = ({ race, index }: RaceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/race/${race.id}/distance`}>
        <div className="card p-6 group-hover:translate-y-[-2px] cultural-pattern">
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
            <Sun className="w-full h-full text-amber-600" />
          </div>
          
          <div className="flex justify-between items-start relative">
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="text-amber-600 text-sm font-medium tracking-wider uppercase">
                பாரம்பரிய விளையாட்டு
                </div>
                <h3 className="font-display text-2xl font-bold text-amber-900 leading-tight">
                  {race.name}
                </h3>
              </div>
              <div className="flex items-center text-amber-700 font-medium bg-amber-50/50 
                            px-3 py-1.5 rounded-lg border border-amber-100/50 w-fit">
                <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                <span>{new Date(race.date).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</span>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-[-8px] bg-amber-100/50 rounded-full scale-0 
                            group-hover:scale-100 transition-transform duration-300" />
              <ChevronRight className="w-6 h-6 text-amber-600 relative
                                     group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};