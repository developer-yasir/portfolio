import { useEffect, useState } from 'react';
import { useScrollReveal } from '../../../hooks/useScrollReveal';

const SkillProgressBar = ({ skill, level, delay = 0 }) => {
    const [progress, setProgress] = useState(0);
    const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setProgress(level);
            }, delay);
            return () => clearTimeout(timer);
        }
    }, [isVisible, level, delay]);

    return (
        <div ref={ref} className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <span className="text-[var(--text-primary)] font-medium">{skill}</span>
                <span className="text-[var(--accent-color)] font-semibold">{level}%</span>
            </div>
            <div className="w-full h-3 bg-[var(--card-bg)] rounded-full overflow-hidden border border-[var(--card-border)]">
                <div
                    className="h-full bg-gradient-to-r from-[var(--accent-color)] to-emerald-400 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default SkillProgressBar;
