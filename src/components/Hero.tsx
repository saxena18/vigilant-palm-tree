import { motion } from 'framer-motion';
import { ShoppingBag, Search, Tag } from 'lucide-react';
import HeroBackground from './HeroBackground';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Discover Premium
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Products
            </span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12"
          >
            Shop the latest trends with our curated collection
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-12"
            variants={containerVariants}
          >
            <motion.div
              variants={featureVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
            >
              <ShoppingBag className="w-6 h-6 text-purple-500" />
              <span className="text-lg text-gray-700 dark:text-gray-200">Premium Quality</span>
            </motion.div>

            <motion.div
              variants={featureVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
            >
              <Search className="w-6 h-6 text-purple-500" />
              <span className="text-lg text-gray-700 dark:text-gray-200">Easy Search</span>
            </motion.div>

            <motion.div
              variants={featureVariants}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl"
            >
              <Tag className="w-6 h-6 text-purple-500" />
              <span className="text-lg text-gray-700 dark:text-gray-200">Best Prices</span>
            </motion.div>
          </motion.div>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-shadow"
          >
            Explore Collection
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}