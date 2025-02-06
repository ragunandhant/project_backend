import { motion } from 'framer-motion';
import Link from 'next/link';
import { Timer, ArrowRight } from 'lucide-react';

interface DistanceCardProps {
  distance: string;
  raceId: string;
  index: number;
  contestId: string;
}

export const DistanceCard = ({ distance, raceId, index,contestId }: DistanceCardProps) => {
  const is200m = distance.includes('200');
  
  // Using specific Tailwind classes instead of dynamic template literals
  const cardClasses = is200m
    ? 'card p-8 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-200/50 group-hover:border-orange-300/80'
    : 'card p-8 bg-gradient-to-br from-red-500/10 to-red-600/10 border-red-200/50 group-hover:border-red-300/80';

  const timerIconClasses = is200m ? 'w-6 h-6 text-orange-500' : 'w-6 h-6 text-red-500';
  const titleClasses = is200m ? 'font-display text-2xl font-bold text-orange-700' : 'font-display text-2xl font-bold text-red-700';
  const arrowClasses = is200m 
    ? 'w-6 h-6 text-orange-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-200'
    : 'w-6 h-6 text-red-400 group-hover:text-red-600 group-hover:translate-x-1 transition-all duration-200';
  const progressBarClasses = is200m
    ? 'h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-500'
    : 'h-full rounded-full bg-gradient-to-r from-red-400 to-red-500';

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      className="group"
    >
      <Link href={`/race/${raceId}/leaderboard/${contestId}`}>
        <div className={cardClasses}>
          <div className="flex justify-between items-start mb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Timer className={timerIconClasses} />
                <h3 className={titleClasses}>
                  {distance} Race
                </h3>
              </div>
            </div>
            <ArrowRight className={arrowClasses} />
          </div>

          <div className="space-y-2">
            <div className="w-full bg-white/50 h-2.5 rounded-full overflow-hidden">
              <div 
                className={progressBarClasses}
                style={{ width: is200m ? '66.67%' : '100%' }}
              ></div>
            </div>
            <div className="flex justify-between text-sm font-medium text-amber-600">
              <span>Start</span>
              <span>{distance}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};