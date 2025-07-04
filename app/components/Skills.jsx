import React from "react";
import Image from "next/image";
import { assets, serviceData } from "@/assets/assets";
import { motion } from "motion/react"

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* Section Titles */}
      <motion.h4
    initial={{y: -20, opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{delay: 0.3, duration: 0.5}}
      
      className="text-center mb-2 text-lg font-Ovo dark:text-white">
        Technical Overview
      </motion.h4>
      <motion.h2
       initial={{y: -20,opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{delay: 0.3, duration: 0.5}}
      className="text-center text-5xl font-Ovo dark:text-white">
        My Skills
      </motion.h2>

      {/* Description */}
      <motion.p 
       initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay: 0.7, duration: 0.5}}
      className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo dark:text-white">
        Full-Stack Developer with DevOps & Cloud skills, 250+ LeetCode problems solved, and basic knowledge of System Design & CS fundamentals.
      </motion.p>

      {/* Service Cards */}
      <motion.div 
       initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay:0.9, duration: 0.6}}
      className="grid-autofit my-10">
        {serviceData.map(({ icon, title, description, tech, link }, index) => (
          <motion.div

          whileHover={{scale: 1.05}}
            key={index}
            className={`border border-gray-400 rounded-lg px-8 py-12 cursor-pointer transition duration-300
  hover:-translate-y-1 hover:shadow-black
  dark:border-white dark:text-white
  dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]
  dark:active:shadow-[0_0_25px_rgba(255,255,255,0.6)]`}
          >
            <Image src={icon} alt="" className="w-10" />

            <h3 className="text-lg my-4 dark:text-white">{title}</h3>

            <p className="text-sm  leading-5 dark:text-white">{description}</p>
              <br />
            <p className="text-sm  leading-5 dark:text-white">Tech: {tech}</p>

      
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
