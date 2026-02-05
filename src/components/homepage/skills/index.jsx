// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-10 border-t my-12 lg:my-24 border-[var(--card-border)]">
      <div className="w-[100px] h-[100px] bg-cyan-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[var(--card-border)]"></span>
          <span className="bg-[var(--card-bg)] w-fit text-[var(--text-primary)] p-2 px-5 text-xl rounded-md border border-[var(--card-border)] transition-colors">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[var(--card-border)]"></span>
        </div>
      </div>

      <div className="w-full my-12 space-y-16">
        {Object.entries(skillsData).map(([category, skills], index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[var(--accent-color)]"></span>
              <span className="text-[var(--accent-color)]">{category}</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {skills.map((skill, id) => (
                <div
                  className="w-32 md:w-36 h-fit flex flex-col items-center justify-center transition-all duration-500 rounded-xl group relative hover:scale-[1.05] cursor-pointer"
                  key={id}
                >
                  <div className="h-full w-full rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] group-hover:border-[var(--accent-color)] transition-all duration-500 shadow-sm group-hover:shadow-md">
                    <div className="flex -translate-y-[1px] justify-center">
                      <div className="w-3/4">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent-color)] to-transparent" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 p-4 md:p-6">
                      <div className="h-8 sm:h-10 transition-transform duration-300 group-hover:scale-110">
                        <img
                          src={skillsImage(skill)}
                          alt={skill}
                          width={40}
                          height={40}
                          className="h-full w-auto rounded-lg object-contain"
                        />
                      </div>
                      <p className="text-[var(--text-primary)] text-xs md:text-sm font-medium text-center capitalize">
                        {skill}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;