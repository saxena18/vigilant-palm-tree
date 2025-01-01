import { motion } from 'framer-motion';

interface TechIconProps {
  name: string;
  color: string;
  icon: string;
}

export default function TechIcon({ name, color, icon }: TechIconProps) {
  return (
    <motion.div
      className="flex-shrink-0 bg-gray-900 rounded-xl p-4 w-32 flex flex-col items-center gap-2"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-12 h-12" dangerouslySetInnerHTML={{ __html: icon }} />
      <span className={`text-lg font-semibold ${color}`}>
        {name}
      </span>
    </motion.div>
  );
}