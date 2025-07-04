import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
    >
      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo dark:text-white'>
        Introduction
      </motion.h4>
      <motion.h2 
          initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
      className='text-center text-5xl font-Ovo dark:text-white'>
        About me
      </motion.h2>

      <motion.div 
       initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-start gap-20 my-20'>
        {/* Left - Image */}
        <motion.div
         initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6}}
         className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={assets.user_image} alt="user" className='w-full rounded-3xl' />
        </motion.div>

        {/* Right - Description + Cards + Tools */}
        <motion.div
         initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className='flex-1 flex flex-col gap-10'>

          {/* Description */}
          <motion.p
            initial={{opacity: 0}}
          whileInView={{opacity: 1}}
        transition={{duration: 0.8, delay:1}}
          className='max-w-2xl font-Ovo dark:text-white'>
            I'm deeply interested in Full-Stack Web Development, DevOps, Cloud Computing,
            and I have hands-on experience
            with a variety of tools & technologies.
          </motion.p>

          {/* Cards */}
          <motion.ul
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8, delay: 0.1}}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
        
        whileHover={{scale: 1.05}}
                key={index}
                className={`border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer transition duration-300
                  dark:border-white
                  dark:shadow-none
                  dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]
                  dark:active:shadow-[0_0_25px_rgba(255,255,255,0.6)]
                  hover:-translate-y-1 hover:shadow-md active:shadow-lg`}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold dark:text-white'>{title}</h3>
                <p className='text-sm dark:text-white/80'>{description}</p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <div>
            <motion.h4 
             initial={{opacity: 0}}
          whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:1.5}}
            className='my-6 font-Ovo dark:text-white'>
              Tools I use
            </motion.h4>
            <motion.ul
            
            className='flex flex-wrap items-center gap-4'>
              {toolsData.map((tool, index) => (
                <motion.li

          whileHover={{scale: 1.1}}
                  key={index}
                  className='p-3 border border-gray-400 rounded-lg hover:-translate-y-1 transition duration-300 dark:border-white'
                >
                  <Image src={tool} alt={`Tool ${index + 1}`} className='w-5 sm:w-7' />
                </motion.li>
              ))}
            </motion.ul>
          </div>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
