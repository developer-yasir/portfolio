import { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');

        // Default to dark mode if no theme is stored, ignoring system preference for default
        if (storedTheme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.add('light');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.remove('light');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');

        if (newTheme) {
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDarkMode}
            title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDarkMode ? (
                <HiSun className="text-[var(--text-primary)] w-5 h-5" aria-hidden="true" />
            ) : (
                <HiMoon className="text-[var(--text-primary)] w-5 h-5" aria-hidden="true" />
            )}
        </button>
    );
};

export default ThemeToggle;
