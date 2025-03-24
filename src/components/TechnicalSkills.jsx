import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Layers, Wrench, Star, Code, GitBranch } from "lucide-react";

const SkillCard = ({ category, icon: Icon, skills }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getExperienceColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-[#E43D12]";
      case "Proficient":
        return "bg-[#D6536D]";
      case "Familiar":
        return "bg-[#FFA2B6]";
      default:
        return "bg-gray-300";
    }
  };

  const getExperienceDescription = (level) => {
    switch (level) {
      case "Advanced":
        return "Extensive experience with complex implementations";
      case "Proficient":
        return "Comfortable building full features independently";
      case "Familiar":
        return "Working knowledge and practical experience";
      default:
        return "";
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-lg p-6 border-2 border-transparent hover:border-[#FFA2B6] transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`p-2 rounded-lg ${
            isHovered ? "bg-[#E43D12]" : "bg-[#FFA2B6]"
          } transition-colors duration-300`}
        >
          <Icon
            size={24}
            className={`${
              isHovered ? "text-white" : "text-[#E43D12]"
            } transition-colors duration-300`}
          />
        </div>
        <h3 className="font-bold text-xl">{category}</h3>
      </div>
      <div className="space-y-6">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-700 font-medium">{skill.name}</span>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs text-white ${getExperienceColor(
                  skill.level
                )}`}
              >
                {skill.level}
              </span>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-500 italic">
                {getExperienceDescription(skill.level)}
              </p>
              {skill.projects && (
                <div className="mt-2 flex gap-2 flex-wrap">
                  {skill.projects.map((project, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const TechnicalSkills = () => {
  const skillsData = [
    {
      category: "Languages",
      icon: Terminal,
      skills: [
        {
          name: "JavaScript",
          level: "Advanced",
          projects: ["CareCompanion", "Binge Finder"],
        },
        {
          name: "HTML5/CSS3",
          level: "Advanced",
          projects: ["Responsive Layouts", "Modern UI Design"],
        },
        {
          name: "SQL",
          level: "Proficient",
          projects: ["Database Design", "Complex Queries"],
        },
      ],
    },
    {
      category: "Frameworks & Libraries",
      icon: Layers,
      skills: [
        {
          name: "React",
          level: "Advanced",
          projects: ["Component Libraries", "State Management"],
        },
        {
          name: "Next.js",
          level: "Proficient",
          projects: ["Server-Side Rendering", "API Routes"],
        },
        {
          name: "Express.js",
          level: "Proficient",
          projects: ["RESTful APIs", "Middleware Development"],
        },
      ],
    },
    {
      category: "Developer Tools",
      icon: Wrench,
      skills: [
        {
          name: "Git & GitHub",
          level: "Advanced",
          projects: ["Version Control", "Collaboration"],
        },
        {
          name: "AWS (Cloud-9)",
          level: "Familiar",
          projects: ["Cloud Development", "Deployment"],
        },
        {
          name: "PostgreSQL",
          level: "Proficient",
          projects: ["Data Modeling", "Performance Optimization"],
        },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="bg-white rounded-lg shadow-lg p-8"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#E43D12] mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-600">
          Expertise developed through real-world projects and continuous
          learning
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <SkillCard
            key={category.category}
            category={category.category}
            icon={category.icon}
            skills={category.skills}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TechnicalSkills;
