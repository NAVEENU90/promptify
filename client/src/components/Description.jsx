import React from 'react'
import { assets } from '../assets/assets';
import { motion } from "framer-motion";
const Description = () => {
  return (
    <motion.div
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}   
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2 '>From Prompt to Picture</h1>
      <p className='text-gray-500 mb-8 '>Your words are the starting point for something original.</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center max-w-300'>
        <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg'/>
        <div>
          <h2 className='text-3xl font-medium max-w-lg mb-4'>A creative studio powered by your imagination</h2>
          <p className='text-gray-600 mb-4'>Promptify turns the scenes, characters, and concepts you describe into original AI-generated images. Share your idea in a prompt, then watch it take shape as artwork you can download and use.
          </p>
          <p className='text-gray-600'>Create anything from imaginative portraits to product concepts and otherworldly landscapes. No illustration experience is needed—just describe what you want to see, generate your image, and bring your next idea to life.</p>
        </div>
      </div>

    </motion.div>
  )
}

export default Description
