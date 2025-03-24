// src/pages/Work.jsx
import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

const Work = () => {
  const projects = [
    {
      image: "/binge-finder.png",
      title: "Binge Finder",
      description:
        "A web application that helps users discover new TV shows and access detailed information to find their next favorite series. Features TV Maze API integration and local storage functionality.",
      technologies: ["React", "TV Maze API", "CSS", "Local Storage"],
      github: "https://github.com/KristenSantos/Binge-Finder",
      live: "https://kristensantos.github.io/Binge-Finder/",
    },
    {
      image: "/care-companion.png",
      title: "CareCompanion",
      description:
        "An application designed to amplify the voices of people of color in healthcare and promote equity, accountability, & transparency. Features seamless API integration and bookmark functionality.",
      technologies: [
        "React",
        "Bulma CSS",
        "API Integration",
        "Frontend Development",
      ],
      github: "https://github.com/CareCompanion-Civic-Tech/react-express-auth",
      live: "https://www.google.com/url?q=https://carecompanion-844z.onrender.com/&sa=D&source=docs&ust=1738968735306113&usg=AOvVaw28e0auQ22LGCTkCzxoT7Fl",
    },
    {
      image: "/bird-go.png",
      title: "Bird-Go",
      description:
        "An online community platform for bird enthusiasts, citizen scientists, and bird watchers to share information about birds. Features efficient database schema and modern design principles.",
      technologies: ["Pug.js", "Database Design", "Frontend Development"],
      github: "https://github.com/Birdsong-Boulevard/Beak-Speak",
      live: "",
    },
    {
      image: "/space-run.png",
      title: "SPACE RUN",
      description:
        "A 2D game that challenges players to avoid obstacles and climb the leaderboard. Features interactive gameplay mechanics and engaging obstacle functions.",
      technologies: ["HTML", "CSS", "Vanilla JavaScript", "Game Development"],
      github: "https://github.com/KristenSantos/SPACERUN",
      live: "https://kristensantos.github.io/SPACERUN/",
    },
    {
      image: "/BLM-Hub.png",
      title: "BLM-Hub",
      description:
        "BML-Hub is a website that provides information about the Black Lives Matter movement. Additionally, BLM-Hub provides educational resources and donation links to those looking to learn more and get involved.",
      technologies: ["HTML", "CSS", "Vanilla JavaScript", "Bootstrap"],
      github: "https://github.com/jcp215033/BLM-Hub",
      live: "https://jcp215033.github.io/BLM-Hub/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 px-6"
    >
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={0.2 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
