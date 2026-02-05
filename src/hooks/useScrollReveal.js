import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered reveal animations
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @returns {Object} - { ref, isVisible }
 */
export function useScrollReveal(options = {}) {
    const { threshold = 0.1, rootMargin = '0px' } = options;
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, stop observing (one-time animation)
                    observer.unobserve(element);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, rootMargin]);

    return { ref, isVisible };
}
