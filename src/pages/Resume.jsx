import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  Phone,
  Github,
  Linkedin,
} from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-20 px-6 bg-[#EBE9E1]"
    >
      <div className="max-w-7xl mx-auto py-16">
        {/* Header Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-8">Resume</h1>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-[#E43D12] text-white px-6 py-3 rounded-lg hover:bg-[#D6536D] transition-colors duration-300"
            >
              <Download size={20} />
              <span>Download PDF</span>
            </button>
            <a
              href="https://www.linkedin.com/in/kristen-i-santos/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E43D12] text-white px-6 py-3 rounded-lg hover:bg-[#D6536D] transition-colors duration-300"
            >
              <ExternalLink size={20} />
              <span>View on LinkedIn</span>
            </a>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-[#E43D12] mb-4">
              Kristen Santos
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="mailto:KristenSantos.dev@gmail.com"
                className="flex items-center gap-2 text-gray-700 hover:text-[#E43D12] transition-colors"
              >
                <Mail size={20} />
                <span>KristenSantos.dev@gmail.com</span>
              </a>
              <a
                href="tel:385-277-7002"
                className="flex items-center gap-2 text-gray-700 hover:text-[#E43D12] transition-colors"
              >
                <Phone size={20} />
                <span>385-277-7002</span>
              </a>
              <a
                href="https://github.com/KristenSantos"
                className="flex items-center gap-2 text-gray-700 hover:text-[#E43D12] transition-colors"
              >
                <Github size={20} />
                <span>Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/kristen-i-santos/"
                className="flex items-center gap-2 text-gray-700 hover:text-[#E43D12] transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#FFA2B6] rounded-lg">
              <Code size={24} className="text-[#E43D12]" />
            </div>
            <h2 className="text-2xl font-bold">Technologies</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              "Javascript",
              "React",
              "NextJs",
              "HTML5",
              "CSS3",
              "Express.js",
              "PostgreSQL",
              "SQL",
              "AWS (Cloud-9)",
              "Figma",
              "VSCode",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#FFA2B6] text-[#E43D12] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#FFA2B6] rounded-lg">
              <Briefcase size={24} className="text-[#E43D12]" />
            </div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>

          <div className="space-y-8">
            <ExperienceItem
              title="Software Engineering Teaching Assistant"
              company="The Marcy Lab School"
              date="Mar 2024 - Present"
              location="Brooklyn, NY"
              points={[
                "Reviewed and graded technical assignments, providing detailed feedback that improved student coding practices",
                "Delivered tailored 1-on-1 support to students struggling with the curriculum",
                "Mentored students in essential technical skills, including problem-solving, teamwork, and effective communication",
              ]}
            />

            <ExperienceItem
              title="Developer Contractor"
              company="NJCIC (NJ Consortium for Immigrant Children)"
              date="Jul 2023 - Sep 2023"
              location="New York, NY"
              points={[
                "Spearheaded the development of key features that improved user engagement",
                "Collaborated seamlessly with NJCIC by aligning on the mission and vision",
                "Produced in-depth feature documentation for independent maintenance",
              ]}
            />
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#FFA2B6] rounded-lg">
              <Code size={24} className="text-[#E43D12]" />
            </div>
            <h2 className="text-2xl font-bold">Projects</h2>
          </div>

          <div className="space-y-8">
            <ProjectItem
              title="Binge Finder"
              date="Jan 2025"
              description="A web application that helps users discover new TV shows and access detailed information"
              points={[
                "Integrated the TV Maze API to fetch and display detailed information about TV shows",
                "Implemented local storage functionality for saving shows",
                "Created responsive design using CSS and media queries",
              ]}
              technologies={["React", "TV Maze API", "CSS"]}
            />

            <ProjectItem
              title="CareCompanion"
              date="Jun 2023"
              description="An application designed to amplify the voices of people of color in healthcare"
              points={[
                "Integrated frontend with CareCompanion's API for seamless data handling",
                "Built bookmark feature for saving healthcare facilities",
                "Created responsive interfaces using Bulma CSS",
              ]}
              technologies={["React", "Express.js", "Bulma CSS"]}
            />

            <ProjectItem
              title="Bird-Go"
              date="Apr 2023"
              description="An online community platform for bird enthusiasts and citizen scientists"
              points={[
                "Designed user-friendly front-end interface with modern design principles",
                "Created efficient database schema for optimal data organization",
                "Implemented clean, reusable HTML using Pug.js",
              ]}
              technologies={["Express.js", "PostgreSQL", "Pug.js"]}
            />

            <ProjectItem
              title="SPACE RUN"
              date="Feb 2023"
              description="A 2D game challenging players to avoid obstacles and climb the leaderboard"
              points={[
                "Developed engaging gameplay mechanics using vanilla JavaScript",
                "Led team development and managed project milestones",
                "Created interactive obstacle systems for enhanced gameplay",
              ]}
              technologies={["HTML", "CSS", "JavaScript"]}
            />
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-[#FFA2B6] rounded-lg">
              <GraduationCap size={24} className="text-[#E43D12]" />
            </div>
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="space-y-8">
            <ExperienceItem
              title="Google G-SWEP Program"
              company="Fellow"
              date="Oct 2023 - Dec 2023"
              location="New York, NY"
              points={[
                "Weekly 1:1 sessions with Google Software Engineer",
                "Focused on data structures, algorithms, and technical interview preparation",
              ]}
            />

            <ExperienceItem
              title="The Marcy Lab School"
              company="Software Engineering Fellow"
              date="Sep 2022 - Sep 2023"
              location="Brooklyn, NY"
              points={[
                "Completed 2,000 hours of web development coursework",
                "Developed full-stack applications using modern technologies",
                "Contributed to open-source projects and technical writing",
              ]}
            />

            <ExperienceItem
              title="Utah Valley University"
              company="AS - General Studies"
              date="Sep 2017 - May 2020"
              location="Orem, UT"
              points={["GPA: 3.48"]}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ExperienceItem = ({ title, company, date, location, points }) => (
  <div className="border-l-4 border-[#FFA2B6] pl-4 hover:border-[#E43D12] transition-colors">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-[#E43D12]">{company}</p>
      </div>
      <div className="text-right">
        <p className="text-gray-600">{date}</p>
        <p className="text-gray-500">{location}</p>
      </div>
    </div>
    <ul className="space-y-2 mt-2">
      {points.map((point, index) => (
        <li key={index} className="text-gray-700 flex items-start gap-2">
          <span className="w-2 h-2 bg-[#FFA2B6] rounded-full mt-2 flex-shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProjectItem = ({ title, date, description, points, technologies }) => (
  <div className="border-l-4 border-[#FFA2B6] pl-4 hover:border-[#E43D12] transition-colors">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <p className="text-gray-500">{date}</p>
    </div>
    <ul className="space-y-2 mt-2">
      {points.map((point, index) => (
        <li key={index} className="text-gray-700 flex items-start gap-2">
          <span className="w-2 h-2 bg-[#FFA2B6] rounded-full mt-2 flex-shrink-0" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
    <div className="flex flex-wrap gap-2 mt-3">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="px-2 py-1 bg-[#FFA2B6] text-[#E43D12] rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

export default Resume;
