import React from 'react'
import { Name , flower} from '../../assets';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';


function Footer() {
    return (
        <>
            <footer className='w-full h-auto poppins-medium relative 2xl:flex 2xl:justify-center 2xl:items-center 2xl:flex-col 2xl:px-24'>
                <div className=' h-auto 2xl:w-full border-t border-t-purple-900 lg:mx-24 sm:mx-8 flex flex-wrap sm:justify-between lg:space-x-80 2xl:space-x-96 justify-center lg:justify-normal mb-4 sm:mb-0 lg:mb-0 xl:mb-0'>
                    <div className='flex flex-col justify-center sm:items-start items-center'>
                        <Name width={230} height={100} />
                        <p className='opacity-80 font-semibold text-sm sm:w-96 mx-4 sm:mx-0 text-center sm:text-start'>Talent Trade is a global platform where individuals come together to learn and teach new skills. Our mission is to empower learners and instructors through skill-sharing.</p>
                        <div className='space-x-4 my-6 '>
                            < InstagramIcon className='hover:text-[#C13584]' style={{fontSize : '1.5rem'}} />
                            <GitHubIcon className='hover:text-[#833AB4]' style={{fontSize : '1.5rem'}} />
                            <LinkedInIcon className='hover:text-[#0a66c2]' style={{fontSize : '1.5rem'}} />
                            <XIcon style={{fontSize : '1.3rem'}} />
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start  opacity-80 font-normal space-y-4'>
                        <a href="#" className='hover:text-purple-700 text-xs  2xl:text-sm text-neutral-500 font-semibold underline'>Explore Skills</a>
                        <a href="#" className='hover:text-purple-700 text-xs  2xl:text-sm text-neutral-500 font-semibold underline'>Become a Mentor</a>
                        <a href="#" className='hover:text-purple-700 text-xs  2xl:text-sm text-neutral-500 font-semibold  underline'>Pricing Plans</a>
                        <a href="#" className='hover:text-purple-700 text-xs  2xl:text-sm text-neutral-500 font-semibold underline'>FAQ</a>
                        <a href="#" className='hover:text-purple-700 text-xs  2xl:text-sm text-neutral-500 font-semibold underline'>Get in Touch</a>
                    </div>
                    <img src={flower} className='bottom-10 right-12 absolute -z-10 sm:right-28 lg:right-12' alt="flower image" />
                </div>
                <div className='w-screen bg-purple-500 h-12 -z-20'>
                </div>
            </footer>

        </>
    )
}

export default Footer