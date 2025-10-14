'use client';

import useStore from '@/store/useStore';

import Portrait from "@/components/portrait/Portrait";
import MenuBar from '@/components/menu/MenuButtons';
import SocialIcons from '@/components/SocialIcons'
import Snake from "@/components/snake/Snake";

import ThemeSwitch from '@/components/themeSwitch/ThemeSwitch';

import Link from "next/link";

import { FaArrowDown } from "react-icons/fa";

import AnimatedText from '@/components/animatedText';

import SimpleLink from '@/components/SimpleLink';
import { AiOutlineNumber } from "react-icons/ai";
import { LuPartyPopper } from "react-icons/lu";

export default function LandingTop() {
    const { darkMode } = useStore();

    return (
        <>
            <div className={`absolute h-full w-full z-10 pointer-events-none ${!darkMode ? 'opacity-40' : ''}`}>
                <Snake color = "purple" big_interval_time={3000}/>
                <Snake color = "#500052" big_interval_time={2000}/>
            </div>

            <div className='absolute left-4 top-4 z-50'>
                <SimpleLink content={{title: <AiOutlineNumber />, link: '/xp'}} />
            </div>

            <div className="flex flex-col gap-2 md:gap-5 justify-center items-center flex-1 my-6 z-20">
                <div className="flex flex-col items-center gap-4 ">
                    <div className="flex w-[150px] md:w-[175px]">
                        <Portrait />
                    </div>
                    <div className="flex flex-col gap-1 text-center justify-center items-center w-full">
                        <div className="w-full">
                            <h1 className="text-3xl md:text-4xl"><AnimatedText targetText='pierre fg' /></h1>
                        </div>
                        <div className="w-full">
                            <span>
                                Photographe, graphiste et musicien
                                <br />
                                Informatique engagée
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className='py-4  md:py-8'>
                    <MenuBar />
                </div>
                {/* <div className='flex flex-row gap-6 items-center'>
                    <LuPartyPopper className='inline'/> 
                    <SimpleLink 
                        content={
                            {
                                title: 'X0a - nouveau single',
                                link: 'https://song.link/p1ps_x0a',
                                extern: true
                            }
                        } 
                    /> 
                    <LuPartyPopper className='inline'/>
                </div> */}
                <SocialIcons />
                <div className='hidden md:block'>
                    <ThemeSwitch />
                </div>
            </div>
            
            <div className="flex justify-center mb-8 z-20 ">
                <Link
                    href='/#about'
                    className='btn btn-primary rounded-full flex justify-center items-center w-[40px] h-[40px] animate-bounce'
                >
                    <FaArrowDown className='text-2xl' />
                </Link>
            </div>
        </>
    ) 
}