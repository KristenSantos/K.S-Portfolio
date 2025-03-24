// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  Code,
  Briefcase,
  Award,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Users,
  Target,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import LoadingScreen from "../components/LoadingScreen";

const TimelineItem = ({ side, year, title, description }) => (
  <motion.div
    initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 }}
    className={`relative ${side === "right" ? "md:col-start-2" : ""}`}
  >
    <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-[#FFA2B6]">
      <div
        className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#E43D12] rounded-full
          ${side === 'left' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}"
      />
      <span className="text-[#E43D12] font-bold">{year}</span>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  </motion.div>
);

const FocusCard = ({ icon: Icon, title, description, skills }) => (
  <div className="flex gap-4 group">
    <div className="flex-shrink-0">
      <div
        className="w-12 h-12 bg-[#FFA2B6] rounded-lg flex items-center justify-center 
          transform transition-transform duration-300 group-hover:scale-110"
      >
        <Icon size={24} className="text-[#E43D12]" />
      </div>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-[#FFA2B6] text-[#E43D12] rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const StatCard = ({ icon: Icon, title, value }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-[#FFA2B6] transition-all duration-300"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-[#FFA2B6] rounded-lg">
        <Icon size={24} className="text-[#E43D12]" />
      </div>
      <div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  </motion.div>
);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const [text] = useTypewriter({
    words: ["Software Engineer", "Teaching Assistant", "Full Stack Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  const stats = [
    { icon: Code, title: "Projects Completed", value: "8+" },
    { icon: Briefcase, title: "Years Experience", value: "2+" },
    { icon: Award, title: "Certifications", value: "3" },
  ];

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="snap-y snap-proximity h-screen overflow-y-scroll">
      {/* Hero Section */}
      <section className="h-screen snap-start flex items-center relative bg-[#EBE9E1]">
        <div className="px-6 w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="md:w-1/2 flex flex-col items-start"
            >
              <h1 className="text-6xl font-bold text-gray-900 mb-4">
                Hi, I'm Kristen Santos
              </h1>
              <div className="text-4xl text-[#E43D12] mb-6">
                I'm a <span>{text}</span>
                <Cursor cursorColor="#E43D12" />
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Passionate about creating meaningful technology and helping
                others learn to code. Currently teaching at Marcy Lab School.
              </p>
              <div className="flex gap-4 mb-8">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://github.com/KristenSantos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#E43D12] text-white rounded-full hover:bg-[#D6536D] transition-colors"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/in/kristen-i-santos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#E43D12] text-white rounded-full hover:bg-[#D6536D] transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="mailto:Kristensxntos@gmail.com"
                  className="p-3 bg-[#E43D12] text-white rounded-full hover:bg-[#D6536D] transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="md:w-1/2 flex justify-center"
            >
              <img
                src="/profile-image.jpg"
                alt="Kristen Santos"
                className="w-80 h-80 rounded-full object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Focus Section */}
      <section className="min-h-screen snap-start flex items-center relative bg-[#EBE9E1] py-20">
        {" "}
        {/* Changed h-screen to min-h-screen and added py-20 */}
        <div className="px-6 w-full">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold text-center text-[#E43D12] mb-12"
            >
              Professional Focus
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Full Stack Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FFA2B6] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E43D12] transition-colors duration-300">
                  <Code
                    size={24}
                    className="text-[#E43D12] group-hover:text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Full Stack Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Building responsive, user-friendly applications with modern
                  technologies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#E43D12]" />
                    <span className="text-gray-600">React & Express.js</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#E43D12]" />
                    <span className="text-gray-600">Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#E43D12]" />
                    <span className="text-gray-600">API Integration</span>
                  </div>
                </div>
              </motion.div>

              {/* Teaching & Mentoring */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg group hover:transform hover:scale-105 transition-all duration-300 lg:col-span-2"
              >
                <div className="w-12 h-12 bg-[#FFA2B6] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E43D12] transition-colors duration-300">
                  <Users
                    size={24}
                    className="text-[#E43D12] group-hover:text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Teaching at Marcy Lab
                </h3>
                <p className="text-gray-600 mb-6">
                  Supporting students in their journey to become full stack
                  developers, providing guidance in both technical skills and
                  professional development.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Current Responsibilities
                    </h4>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#E43D12]" />
                      <span className="text-gray-600">Technical Mentoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#E43D12]" />
                      <span className="text-gray-600">Code Review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#E43D12]" />
                      <span className="text-gray-600">
                        Grading
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Focus Areas
                    </h4>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#E43D12]" />
                      <span className="text-gray-600">Student Success</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#E43D12]" />
                      <span className="text-gray-600">
                        Technical Leadership
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#E43D12]" />
                      <span className="text-gray-600">
                        Professional Development
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Learning & Growth */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FFA2B6] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#E43D12] transition-colors duration-300">
                  <Target
                    size={24}
                    className="text-[#E43D12] group-hover:text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">Current Learning</h3>
                <p className="text-gray-600 mb-6">
                  Continuously expanding skills through hands-on projects and
                  professional development.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#E43D12]" />
                    <span className="text-gray-600">Advanced React</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#E43D12]" />
                    <span className="text-gray-600">System Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#E43D12]" />
                    <span className="text-gray-600">Python</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-center"
            >
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 bg-[#E43D12] text-white px-8 py-3 rounded-lg hover:bg-[#D6536D] transition-all duration-300 group"
              >
                <span>View Full Resume</span>
                <ArrowRight
                  size={20}
                  className="transform transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
