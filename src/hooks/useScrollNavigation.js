// hooks/useScrollNavigation.js
import { useState, useEffect, useCallback } from "react";

const useScrollNavigation = (options = {}) => {
  const { threshold = 100, offset = 0 } = options;
  const [activeSection, setActiveSection] = useState("");
  const [navElement, setNavElement] = useState(null);
  const [containerElement, setContainerElement] = useState(null);
  const [sections, setSections] = useState([]);

  // Register the navigation element
  const registerNav = useCallback((element) => {
    setNavElement(element);
  }, []);

  // Register the container element
  const registerContainer = useCallback((element) => {
    setContainerElement(element);
    // Find all section elements within the container
    if (element) {
      const sectionElements = Array.from(element.querySelectorAll("[id]"));
      setSections(sectionElements);
    }
  }, []);

  // Calculate which section is active based on scroll position
  useEffect(() => {
    if (!sections.length) return;

    const handleScroll = () => {
      // Get current scroll position
      const scrollPosition = window.scrollY + offset;

      // Find the section that is currently in view
      // We use a reverse loop to prioritize later sections when exactly at a boundary
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop - threshold;

        if (scrollPosition >= sectionTop) {
          // Set this section as active if we've scrolled past its top (minus threshold)
          if (activeSection !== section.id) {
            setActiveSection(section.id);
          }
          break;
        }
      }
    };

    // Run once on mount to set initial active section
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections, threshold, offset, activeSection]);

  return {
    activeSection,
    registerNav,
    registerContainer,
  };
};

export default useScrollNavigation;
