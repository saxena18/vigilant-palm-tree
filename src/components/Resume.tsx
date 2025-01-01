import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="resume" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Experience</h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-12">
            <div className="relative">
              <Briefcase className="absolute -left-4 w-8 h-8 text-purple-500" />
              <div className="ml-8 p-6 bg-gray-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-2">Senior Full Stack Developer</h3>
                <p className="text-purple-400 mb-4">Tech Solutions Inc. • 2020 - Present</p>
                <p className="text-gray-300">
                  Led development of enterprise applications using React, Node.js, and AWS.
                  Mentored junior developers and implemented CI/CD pipelines.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <GraduationCap className="absolute -left-4 w-8 h-8 text-purple-500" />
              <div className="ml-8 p-6 bg-gray-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-2">Full Stack Developer</h3>
                <p className="text-purple-400 mb-4">Digital Innovations • 2018 - 2020</p>
                <p className="text-gray-300">
                  Developed and maintained multiple client projects using modern web technologies.
                  Implemented responsive designs and optimized application performance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}