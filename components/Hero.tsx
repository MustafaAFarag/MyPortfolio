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
      id="hero"
      className="relative pb-20 bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800 h-full"
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
      <div className="relative z-10 flex justify-center pt-20 px-6 sm:pt-28 md:pt-32 mb-20">
        {/* Center Content */}
        <div className="mx-auto flex flex-col items-center text-center">
          <TextGenerateEffect
            words="Hi! I'm Mustafa Ashraf"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg"
          />

          <TextGenerateEffect
            words="a Software Engineer"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-purple drop-shadow-lg"
          />

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            <a
              href="/Mustafa_Ashraf_CV.pdf"
              download="Mustafa Ashraf's CV.pdf"
              className="relative inline-flex h-10 sm:h-12 w-full sm:w-48 md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none justify-center"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-5 sm:px-7 text-base sm:text-lg font-medium text-white backdrop-blur-3xl gap-2">
                Download my CV
                <FaLocationArrow />
              </span>
            </a>

            <div className=" flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <a
                href="mailto:mustafa.ashraf.saad@gmail.com"
                className="text-base sm:text-lg text-white hover:underline flex items-center"
              >
                <FaEnvelope className="mr-2 text-lg sm:text-xl" /> Gmail
              </a>
              <a
                href="https://github.com/MustafaAFarag"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg text-white hover:underline flex items-center"
              >
                <FaGithub className="mr-2 text-lg sm:text-xl" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mustafaashrafsaad/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg text-white hover:underline flex items-center"
              >
                <FaLinkedin className="mr-2 text-lg sm:text-xl" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 m-6 sm:m-10">
            <div className="relative inline-flex w-full sm:w-64 overflow-hidden rounded-lg p-[1px] focus:outline-none justify-center">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-5 sm:px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                <div className="flex flex-col items-center p-4 sm:p-6">
                  <p className="text-xl sm:text-2xl">Experience</p>
                  <span className="text-gray-400 text-xs sm:text-sm">
                    1 Year
                  </span>
                </div>
              </span>
            </div>
            <div className="relative inline-flex w-full sm:w-64 overflow-hidden rounded-lg p-[1px] focus:outline-none justify-center">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-5 sm:px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
                <div className="flex flex-col items-center p-4 sm:p-6">
                  <p className="text-xl sm:text-2xl">Projects</p>
                  <span className="text-gray-400 text-xs sm:text-sm">
                    10+ Completed Projects
                  </span>
                </div>
              </span>
            </div>
          </div>

          <p className="text-left text-xl">
            I am a 2nd-year student at FCDS, Alexandria University, with a CGPA
            of 3.3.
            <br />
            <br />
            <span>
              <span className="text-green-500 font-bold">M</span>
              <span className="text-gray-500 font-bold">E</span>
              <span className="text-blue-500 font-bold">R</span>
              <span className="text-lime-500 font-bold">N</span>
            </span>{" "}
            Stack Developer with 1 year Experience. Former Data Scientist with 6
            months of experience.
            <br />
            <br />
            Highly skilled in full-stack development, with expertise in{" "}
            <span className="text-yellow-400 font-bold">JavaScript</span>,{" "}
            <span className="text-blue-400 font-bold">TypeScript</span>,{" "}
            <span className="text-sky-400 font-bold">React</span>,{" "}
            <span className="text-purple-500 font-bold">Next.js</span>,{" "}
            <span className="text-green-600 font-bold">Node.js</span>,{" "}
            <span className="text-gray-500 font-bold">Express.js</span>,{" "}
            <span className="text-green-500 font-bold">MongoDB</span>,{" "}
            <span className="text-blue-500 font-bold">MySQL</span>,{" "}
            <span className="text-blue-300 font-bold">
              Microsoft SQL Server
            </span>
            , and <span className="text-teal-400  font-bold">Supabase</span>.
            <br />
            <br />
            In addition to web development, I have ventured into mobile
            development using{" "}
            <span className="text-cyan-400 font-bold">React Native</span>.
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
