import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#EBE9E1] flex items-center justify-center">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="w-16 h-16 border-4 border-[#E43D12] rounded-full border-t-transparent"
    />
  </div>
);

export default LoadingScreen;