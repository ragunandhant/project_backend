import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-amber-50/90">
      <motion.div
        className="w-32 h-32 relative"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
       
      </motion.div>
      <div className="absolute mt-36 text-xl font-semibold text-amber-800">
        Loading...
      </div>
    </div>
  );
};