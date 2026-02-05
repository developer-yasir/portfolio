import { FaCode, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-xl border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] p-6 transition-all duration-300 hover:scale-[1.02] hover:border-pink-500/50 flex flex-col h-full shadow-lg">
      <div className="flex flex-row space-x-2 mb-4">
        <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-sm"></div>
        <div className="h-3 w-3 rounded-full bg-amber-500/80 shadow-sm"></div>
        <div className="h-3 w-3 rounded-full bg-emerald-500/80 shadow-sm"></div>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-pink-500 transition-colors">
          {project.name}
        </h3>

        <p className="text-sm text-gray-400 mb-6 line-clamp-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <a
          href={project.code || "#"}
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-pink-500 border border-pink-500/50 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300"
        >
          <FaCode size={16} />
          <span>Code</span>
        </a>
        <a
          href={project.demo || "#"}
          target="_blank" rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 border border-cyan-400/50 rounded-full hover:bg-cyan-400 hover:text-[#0d1224] transition-all duration-300"
        >
          <FaExternalLinkAlt size={14} />
          <span>Live Demo</span>
        </a>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
    </div>
  );
}

export default ProjectCard;