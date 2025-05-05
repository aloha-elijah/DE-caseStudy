"use client";
import React, { useEffect, useRef } from "react";
import useScrollNavigation from "../hooks/useScrollNavigation";
import ScrollNav from "@/components/ui/ScrollNav";
import LandingSection from "@/components/sections/LandingSection";
import SpeakerSection from "@/components/sections/SpeakerSection";
import FAQSection from "@/components/sections/FAQSection";
import localData from "../../public/data/localContent.json";

const COMPONENT_REGISTRY = {
  LandingSection: LandingSection,
  SpeakerSection: SpeakerSection,
  FAQSection: FAQSection,
};

export default function Home() {
  const navRef = useRef(null);
  const contentRef = useRef(null);
  const { activeSection, registerNav, registerContainer } = useScrollNavigation(
    { threshold: 80 }
  );

  useEffect(() => {
    if (navRef.current) registerNav(navRef.current);
    if (contentRef.current) {
      registerContainer(contentRef.current);
    }
  }, [registerNav, registerContainer]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = navRef.current ? navRef.current.offsetHeight : 0;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      console.error(`Element with id "${sectionId}" not found`);
    }
  };

  const sectionItems = localData.pageSection;
  if (!sectionItems || sectionItems.length === 0) {
    return <div className="p-4">No section data available</div>;
  }

  return (
    <>
      <main className="bg-[#F5F5F7]">
        <ScrollNav
          navRef={navRef}
          sections={sectionItems}
          activeSection={activeSection}
          onClick={scrollToSection}
        />
        <div ref={contentRef} className="w-full flex flex-col items-center">
          {sectionItems.map(({ id, label, componentType, data }) => {
            const SectionComponent = COMPONENT_REGISTRY[componentType];
            if (!SectionComponent) {
              return (
                <div key={id} id={id} className="p-4 text-red-500">
                  Unknown component: {componentType}
                </div>
              );
            }
            return (
              <section
                key={id}
                id={id}
                className="min-h-[400px] w-full max-w-[1728px] flex flex-col items-center"
              >
                {componentType === "LandingSection" ? (
                  <SectionComponent id={id} label={label} {...data} />
                ) : (
                  <SectionComponent {...data} />
                )}
              </section>
            );
          })}
        </div>
      </main>
      <footer className="h-[12rem] bg-neutral-600 rounded-t-4xl"></footer>
    </>
  );
}
