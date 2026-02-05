"use client";

import { useEffect, useState } from 'react';

export default function Appointment({ texts, speed = 100, pause = 1500 }) {
    const [displayedText, setDisplayedText] = useState('');
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentFullText = texts[currentTextIndex];

            if (isDeleting) {
                setDisplayedText(prev => prev.slice(0, -1));
            } else {
                setDisplayedText(prev => currentFullText.slice(0, prev.length + 1));
            }

            if (!isDeleting && displayedText === currentFullText) {
                setTimeout(() => setIsDeleting(true), pause);
            } else if (isDeleting && displayedText === '') {
                setIsDeleting(false);
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentTextIndex, texts, speed, pause]);

    return (
        <span className="text-[cyan-400]">
            {displayedText}
            <span className="animate-pulse">|</span>
        </span>
    );
}
