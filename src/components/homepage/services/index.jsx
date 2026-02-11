// @flow strict
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase, FaLayerGroup, FaWordpress, FaArrowRight } from "react-icons/fa";
import GlowCard from "../../helper/glow-card";

const servicesData = [
    {
        title: "Full Stack Development",
        description: "I build full-stack apps with MongoDB, Express, React, and Node.js—handling everything from database design to user interface.",
        icon: <FaLayerGroup className="text-emerald-500" size={36} />,
        identifier: "home-service-1"
    },
    {
        title: "Frontend Engineering",
        description: "I create fast, responsive interfaces using React, Next.js, and Tailwind CSS that work great on any device.",
        icon: <BiCodeAlt className="text-cyan-500" size={36} />,
        identifier: "home-service-2"
    },
    {
        title: "Backend & API Development",
        description: "I design and build REST APIs with Node.js and Express that are secure, well-documented, and easy to work with.",
        icon: <FaDatabase className="text-violet-500" size={36} />,
        identifier: "home-service-3"
    },
    {
        title: "CMS & WordPress",
        description: "I develop custom WordPress sites and make sure they're fast, secure, and easy for you to manage.",
        icon: <FaWordpress className="text-amber-500" size={36} />,
        identifier: "home-service-4"
    }
];

function Services() {
    return (
        <div id="services" className="relative z-50 border-t my-12 lg:my-24 border-[var(--card-border)] transition-colors">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[var(--card-border)]"></span>
                    <span className="bg-[var(--card-bg)] w-fit text-[var(--text-primary)] p-2 px-5 text-xl rounded-md border border-[var(--card-border)] transition-colors">
                        Services
                    </span>
                    <span className="w-24 h-[2px] bg-[var(--card-border)]"></span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                {servicesData.map((service, index) => (
                    <GlowCard key={index} identifier={service.identifier}>
                        <div className="p-6 lg:p-10 relative h-full">
                            <img
                                src="/blur-23.svg"
                                alt="Hero"
                                width={1080}
                                height={200}
                                className="absolute bottom-0 left-0 opacity-50 -z-10"
                            />
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-2xl bg-[var(--card-bg)]/50 border border-[var(--card-border)] group-hover:border-[var(--accent-color)]/30 transition-all duration-300">
                                    {service.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="mb-2 text-xl lg:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-color)] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm lg:text-base text-[var(--text-secondary)] leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </GlowCard>
                ))}
            </div>

            <div className="flex justify-center mt-12">
                <a
                    href="/services"
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3 text-sm font-bold text-[var(--background-color)] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                    EXPLORE ALL SERVICES
                    <FaArrowRight size={14} />
                </a>
            </div>
        </div>
    );
}

export default Services;
