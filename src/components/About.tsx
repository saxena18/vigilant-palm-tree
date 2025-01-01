import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <Monitor className="w-12 h-12 text-purple-500" />
          </div>
          <h2 className="text-4xl font-bold text-white text-center mb-8">About Me</h2>
          <div className="bg-gray-800 p-8 rounded-2xl shadow-xl">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with expertise in modern web technologies.
              With a strong foundation in both front-end and back-end development, I create
              seamless, user-centric applications that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in software development began 5 years ago, and since then,
              I've worked on various projects ranging from small business websites to
              complex enterprise applications. I'm constantly learning and adapting to
              new technologies to deliver the best possible solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}