import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <section
      id="section"
      className="relative pb-20 h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800"
    >
      {/* Spotlights */}
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* Grid Background */}
      <div className="absolute inset-0 w-full h-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.5] flex items-center justify-center z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex justify-center pt-32 px-8">
        {/* Center Content */}
        <div className="mx-auto flex flex-col items-center text-center">
          <TextGenerateEffect
            words="Hi! I'm Mustafa Ashraf"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
          />
          <TextGenerateEffect
            words="a Software Engineer"
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-purple drop-shadow-lg"
          />

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-6">
            {/* Download CV */}
            <a
              href="/Mustafa_Ashraf_CV.pdf"
              download="Mustafa Ashraf's CV.pdf"
              className="relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none justify-center"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-lg font-medium text-white backdrop-blur-3xl gap-2">
                Download my CV
                <FaLocationArrow />
              </span>
            </a>

            {/* Contact Links */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-6 -translate-y-3">
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
          </div>

          <div className="flex gap-10 m-10">
            <div className="relative inline-flex w-full md:w-64 overflow-hidden rounded-lg p-[1px] focus:outline-none justify-center">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                <div className="flex flex-col items-center p-6">
                  <p className="text-2xl ">Experience</p>
                  <span className="text-gray-400">1 Year</span>
                </div>
              </span>
            </div>
            <div className="relative inline-flex w-full md:w-64 overflow-hidden rounded-lg p-[1px] focus:outline-none justify-center">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                <div className="flex flex-col items-center p-6">
                  <p className="text-2xl ">Projects</p>
                  <span className="text-gray-400 text-[0.8rem]">
                    10+ Completed Projects
                  </span>
                </div>
              </span>
            </div>
          </div>
          <p className="text-left">
            I am a 2nd-year student at FCDS, Alexandria University, with a CGPA
            of 3.3.
            <br />
            <br />
            MERN Stack Developer with 1 year Experience. Former Data Scientist
            with 6 months of experience.
            <br />
            <br />
            Highly skilled in full-stack development, with expertise in
            JavaScript, TypeScript, React, Next.js, Node.js, Express.js,
            MongoDB, MySQL, Microsoft SQL Server, and Supabase.
            <br />
            <br />
            In addition to web development, I have ventured into mobile
            development using React Native.
            <br />
            <br />I am proficient in collaborating harmoniously within teams,
            ensuring effective communication and productive outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
