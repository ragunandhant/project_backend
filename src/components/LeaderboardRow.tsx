import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';


export type Entry = {
  id: string; // UUID
  name1: string;
  name2: string | null; // Optional field
  cartno: string;
  time: number; // Double precision
  created_at: Date;
  updated_at: Date;
  categoriesId: string; // UUID
};
interface LeaderboardRowProps {
  result: Entry;
  position: number;
  index: number;
}

export const LeaderboardRow = ({ result, position, index }: LeaderboardRowProps) => {
  const isTopThree = position <= 3;
  const colors = {
    1: 'from-amber-500/20 to-yellow-500/20 border-amber-200',
    2: 'from-slate-300/20 to-slate-400/20 border-slate-200',
    3: 'from-orange-300/20 to-orange-400/20 border-orange-200',
  }[position] || 'from-white to-white/80 border-amber-100';
  
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`
        card p-4 bg-gradient-to-r ${colors}
        hover:translate-y-[-2px]
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
            {isTopThree ? (
              <Trophy className={`w-6 h-6 ${
                position === 1 ? 'text-amber-500' :
                position === 2 ? 'text-slate-400' :
                'text-orange-400'
              }`} />
            ) : (
              <span className="text-lg font-display font-bold text-amber-700">
                {position}
              </span>
            )}
          </div>
          <div>
            <span className="block text-lg font-semibold text-amber-900">
              வண்டி எண் {result.cartno}
            </span>
            
          </div>
        </div>
        <div className="text-right">
          <span className="block font-mono text-2xl font-bold text-amber-900">
            {result.time.toFixed(3)}
          </span>
          <span className="text-sm font-medium text-amber-600">seconds</span>
        </div>
      </div>
    </motion.div>
  );
};