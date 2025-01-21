import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 mb-20 relative" id="contact">
      {/* background grid */}
      <div className="w-full h-[60rem] absolute left-0 -bottom-72 max-h-7xl">
        <img src="/footer-grid.svg" alt="grid" className="w-full opacity-50" />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-around items-center max-w-7xl mx-auto relative">
        <div>
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2025 Mustafa Ashraf
          </p>
          <p className="md:text-base text-sm md:font-normal font-light">
            Gmail : mustafa.ashraf.saad@gmail.com
          </p>
        </div>

        <div className="flex flex-col items-center md:gap-3 gap-6">
          <div className="flex gap-6">
            <a
              href="mailto:mustafa.ashraf.saad@gmail.com"
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <FaEnvelope className="text-white w-5 h-5" />
            </a>
            <a
              href="https://github.com/MustafaAFarag"
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <FaGithub className="text-white w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mustafaashrafsaad/"
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <FaLinkedin className="text-white w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
