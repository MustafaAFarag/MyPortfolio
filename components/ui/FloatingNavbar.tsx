import { useState, useEffect } from "react";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdCode } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const sections = [
  { id: "hero", label: "Home", icon: <FaUserAlt /> },
  { id: "projects", label: "Projects", icon: <MdCode /> },
  { id: "about", label: "About", icon: <RiServiceLine /> },
  { id: "contact", label: "Contact", icon: <BiMessageSquareDetail /> },
];

export default function FloatingNavbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.5, // Trigger when 50% of the section is in the viewport
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[999] flex gap-3 px-7 py-3 rounded-3xl bg-black/30 backdrop-blur-lg">
      {sections.map((section) => (
        <a
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          onMouseEnter={() => setHoveredSection(section.id)}
          onMouseLeave={() => setHoveredSection(null)}
          className={`cursor-pointer p-3 rounded-full flex text-lg ${
            activeSection === section.id
              ? "bg-white text-black"
              : hoveredSection === section.id
              ? "bg-white text-black"
              : "bg-transparent text-gray-300 hover:bg-black/30"
          }`}
        >
          {section.icon}
        </a>
      ))}
    </nav>
  );
}
