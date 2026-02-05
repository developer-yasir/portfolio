// @flow strict
import { BiCodeAlt } from "react-icons/bi";
import { FaDatabase, FaLayerGroup, FaWordpress, FaArrowRight } from "react-icons/fa";
import GlowCard from "../../helper/glow-card";

const servicesData = [
    {
        title: "Full Stack Development",
        description: "Building robust, scalable web applications using the MERN stack (MongoDB, Express, React, Node.js).",
        icon: <FaLayerGroup className="text-emerald-500" size={36} />,
        identifier: "home-service-1"
    },
    {
        title: "Frontend Engineering",
        description: "Creating responsive, high-performance user interfaces with React, Next.js, and Tailwind CSS.",
        icon: <BiCodeAlt className="text-cyan-500" size={36} />,
        identifier: "home-service-2"
    },
    {
        title: "Backend & API Development",
        description: "Designing and implementing secure RESTful APIs and server-side logic using Node.js and Express.",
        icon: <FaDatabase className="text-violet-500" size={36} />,
        identifier: "home-service-3"
    },
    {
        title: "CMS & WordPress",
        description: "Custom WordPress development and management, ensuring sites are fast and reliable.",
        icon: <FaWordpress className="text-amber-500" size={36} />,
        identifier: "home-service-4"
    }
];

function Services() {
    return (
        <div id="services" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Services
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
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
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-emerald-500/30 transition-all duration-300">
                                    {service.icon}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="mb-2 text-xl lg:text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
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
                    className="flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-8 py-3 text-sm font-bold text-[#0d1224] transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                    EXPLORE ALL SERVICES
                    <FaArrowRight size={14} />
                </a>
            </div>
        </div>
    );
}

export default Services;
