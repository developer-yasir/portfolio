/**
 * Smooth scroll to a section by ID
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Offset in pixels (default: 80 for navbar height)
 */
export const scrollToSection = (sectionId, offset = 80) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
};

/**
 * Handle hash navigation on page load
 */
export const handleHashNavigation = () => {
    const hash = window.location.hash;
    if (hash) {
        const sectionId = hash.replace('#', '');
        setTimeout(() => {
            scrollToSection(sectionId);
        }, 100);
    }
};

/**
 * Get the currently active section based on scroll position
 * @param {string[]} sectionIds - Array of section IDs to check
 * @returns {string|null} - The ID of the active section
 */
export const getActiveSection = (sectionIds) => {
    const scrollPosition = window.scrollY + 100;

    for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            return id;
        }
    }

    return null;
};
