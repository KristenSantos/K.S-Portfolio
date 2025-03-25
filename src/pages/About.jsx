import React from "react";
import { motion } from "framer-motion";
import { Code2, BookOpen, Rocket, Heart } from "lucide-react";
import TechnicalSkills from "../components/TechnicalSkills"; 

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a full-stack developer and teaching assistant passionate about
            creating meaningful technology and helping others learn to code.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="mb-20">
          <div className="space-y-12">
            {/* Present Section */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <Rocket size={32} className="text-[#E43D12]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#E43D12] mb-4">
                  Present
                </h2>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    Currently serving as a teacher assistant at the Marcy Lab
                    school, where I support students in their full stack
                    development journey. I work alongside the lead instructor to
                    guide students through the curriculum, provide grading
                    support, and develop strategies to help students who need
                    additional assistance succeed.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Past - Marcy Lab */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <Code2 size={32} className="text-[#E43D12]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#E43D12] mb-4">
                  My Tech Journey
                </h2>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Before becoming a teacher assistant, I was a student at
                    Marcy Lab where I mastered full stack development. The
                    program not only taught me technical skills like JavaScript,
                    React, and Express.js but also provided invaluable
                    leadership training through group projects.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Past - Career Change */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <BookOpen size={32} className="text-[#E43D12]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#E43D12] mb-4">
                  Career Transition
                </h2>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    My path to tech wasn't straightforward. Initially pursuing
                    nursing, I discovered my passion for coding through a local
                    trade school program. This realization led me to make a bold
                    move from Utah to Brooklyn in September 2022 to join the
                    Marcy Lab program, marking the beginning of my tech journey.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Future */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <Heart size={32} className="text-[#E43D12]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#E43D12] mb-4">
                  Looking Forward
                </h2>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-gray-700 leading-relaxed">
                    My mission is to use technology to make a positive impact.
                    I'm passionate about working with organizations that
                    prioritize helping and protecting people, viewing them as
                    individuals to support rather than just metrics.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Replace the old Skills Section with the new TechnicalSkills component */}
        <TechnicalSkills />
      </div>
    </motion.div>
  );
};

export default About;
