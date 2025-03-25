// src/pages/Work.jsx
import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({
  title,
  description,
  technologies,
  github,
  live,
  image,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white rounded-lg shadow-lg overflow-hidden"
  >
    <div className="h-48 bg-gray-200 relative">
      <img
        src={image} 
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-[#FFA2B6] text-[#E43D12] px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#E43D12] hover:text-[#D6536D] transition-colors"
        >
          <Github size={20} />
          Github
        </a>
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#E43D12] hover:text-[#D6536D] transition-colors"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
