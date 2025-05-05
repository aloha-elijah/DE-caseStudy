import React, { useRef, useEffect, useState } from "react";

const ScrollNav = ({ navRef, sections = [], activeSection, onClick }) => {
  const [pillStyle, setPillStyle] = useState({});
  const itemRefs = useRef({});

  if (!sections.length) return null;

  const defaultSections = [];

  const displaySections = sections.length ? sections : defaultSections;

  useEffect(() => {
    if (itemRefs.current[activeSection]) {
      const activeElement = itemRefs.current[activeSection];
      const rect = activeElement.getBoundingClientRect();
      const parentRect =
        activeElement.parentElement.parentElement.getBoundingClientRect();

      setPillStyle({
        transform: `translateX(${rect.left - parentRect.left}px)`,
        width: `${rect.width}px`,
      });
    }
  }, [activeSection]);

  return (
    <nav
      ref={navRef}
      className="fixed bottom-16 z-10 px-2 py-1 left-1/2 -translate-x-1/2 bg-gray-100 rounded-full shadow-md"
    >
      <ul className="flex items-center relative">
        <span
          className="absolute h-8 bg-white rounded-full shadow-sm transition-all duration-300 ease-in-out"
          style={pillStyle}
        />

        {displaySections.map((section) => (
          <li key={section.id}>
            <button
              className={`text-md px-4 py-2 z-10 relative transition-colors duration-300 cursor-pointer ${
                activeSection === section.id
                  ? "text-gray-800 font-medium"
                  : "text-gray-500"
              }`}
              onClick={() => onClick(section.id)}
              ref={(el) => {
                if (el) itemRefs.current[section.id] = el;
              }}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ScrollNav;
