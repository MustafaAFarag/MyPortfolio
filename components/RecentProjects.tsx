"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState, useEffect } from "react"; // Import useState and useEffect hooks
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  const [showMore, setShowMore] = useState(false); // State to manage showing more projects
  const [windowWidth, setWindowWidth] = useState(0); // State to store window width

  // Update window width after component mounts
  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update windowWidth on resize
    };

    window.addEventListener("resize", handleResize); // Add event listener for resize

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to toggle the visibility of the 3rd row
  const handleShowMore = () => setShowMore(!showMore);

  return (
    <section id="projects" className="xl:mt-[11rem] 2xl:mt-0">
      <h1 className="heading">
        A small selection of
        <span className="text-purple"> recent projects</span>
      </h1>

      {/* Grid layout with specific number of columns for 1366x768 (xl) and 1980x1080 (2xl) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-4 w-screen">
        {/* Render all projects by default for 2xl and for xl, toggle between 6 and 9 projects */}
        {projects
          .slice(0, windowWidth >= 1536 || showMore ? 9 : 6)
          .map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-center m-5"
              key={item.id}
            >
              <PinContainer
                title="/ui.aceternity.com"
                href="https://twitter.com/mannupaaji"
              >
                <div className="relative flex items-center justify-center sm:w-96 w-full overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>
                <p>{item.desTitle}</p>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2" />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
      </div>

      {/* Show more button for xl (1366x768) and smaller resolutions */}
      {windowWidth < 1536 && projects.length > 6 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleShowMore}
            className="relative inline-flex h-10 sm:h-12 w-full sm:w-48 md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none justify-center"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-5 sm:px-7 text-base sm:text-lg font-medium text-white backdrop-blur-3xl gap-2">
              {showMore ? "Show Less Projects" : "Show More Projects"}
            </span>
          </button>
        </div>
      )}
    </section>
  );
};

export default RecentProjects;
