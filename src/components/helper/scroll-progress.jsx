import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setScrollProgress((currentScroll / scrollHeight) * 100);
            }
        };

        window.addEventListener("scroll", updateScrollProgress);
        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
            <div
                className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 transition-all duration-300 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
}
