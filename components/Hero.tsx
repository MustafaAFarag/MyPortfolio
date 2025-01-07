import {
  FaLocationArrow,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-20 h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800">
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 w-full h-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        flex items-center justify-center z-0"
      >
        <div
          className="absolute inset-0 pointer-events-none dark:bg-black-100 bg-white
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex justify-center items-center h-full px-8">
        {/* Center Content */}
        <div className="mx-auto flex flex-col items-center text-center">
          <TextGenerateEffect
            words="Hi! I'm Mustafa Ashraf"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
          />
          <TextGenerateEffect
            words="a Software Engineer"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-purple drop-shadow-lg"
          />

          <div className="flex flex-col items-center mt-8 space-y-6">
            <a href="/path-to-cv.pdf" download className="w-full md:w-60">
              <MagicButton
                title="Download my CV"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            {/* Contact Info Underneath */}
            <div className="flex gap-8 items-center justify-center mt-6">
              <a
                href="mailto:mustafa.ashraf.saad@gmail.com"
                className="text-lg text-white hover:underline flex items-center"
              >
                <FaEnvelope className="mr-2 text-xl" /> Gmail
              </a>
              <a
                href="https://github.com/yourgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white hover:underline flex items-center"
              >
                <FaGithub className="mr-2 text-xl" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-white hover:underline flex items-center"
              >
                <FaLinkedin className="mr-2 text-xl" /> LinkedIn
              </a>
            </div>

            <a href="#about" className="mt-6">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
