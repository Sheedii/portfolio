import { FaDownload } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { socialMedia } from "@/data";


const Hero = () => {
  return (
    <div className="pb-20 pt-28" id="header" >
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[65vw] flex flex-col items-center justify-center">

          <TextGenerateEffect
            words="Empowering Change Through Thoughtful Engineering"
            className="text-center text-[22px] md:text-2xl lg:text-4xl"
          />

          <div className="flex flex-row items-center justify-center gap-4">
            <img className="w-[14%] border-[solid] border-[white] border-[2px] rounded-[50%]" src="shedipdp2.png" alt="Chadi's Picture" />
            <p className="text-start mt-5 md:tracking-wider mb-4 text-sm md:text-xl lg:text-2xl">
              <span className="text-sm md:text-4xl lg:text-5xl font-bold"
                style={{ fontFamily: "'Poppins', sans-serif" }}>Chadi Amara Nebli</span>
              <br /> <span className="pl-[20px]"> Software engineer </span> <br/>
              <span className="flex flex-row items-center justify-start gap-5 p-2 pl-[40px]">
                {socialMedia.map((info) => (
                  <a
                    key={info.id}
                    href={info.url} // Set the URL
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security best practice for external links
                    className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
                  >
                    <img src={info.img} alt="icons" width={20} height={20} />
                  </a>
                ))}
              </span>
            </p>
          </div>

          <p className="text-justify mt-5 md:tracking-wider mb-4 text-sm md:text-[1rem] px-[10%]  lg:text-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
            I am a recent software engineering graduate with a solid foundation in software development and problem-solving. I am eager to secure a software developer role where I can apply my skills and thrive in a dynamic team environment.
          </p>



          <div className="flex md:flex-row items-center justify-center md:gap-10 w-[45%] flex-col gap-5">
            <MagicButton
              title="English CV"
              icon={<FaDownload />}
              position="right"
              file="./CV_CHADI__Amara_Nebli.pdf"
            />
            <MagicButton
              title="French CV"
              icon={<FaDownload />}
              position="right"
              file="./CV_CHADI__Amara_Nebli_fr.pdf"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
