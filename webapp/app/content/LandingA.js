'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';
import { AiOutlineNumber, AiOutlineFilePdf } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa6';

import Portrait from '@/components/portrait/Portrait';
import MenuBar from '@/components/menu/MenuButtons';
import SocialIcons from '@/components/SocialIcons';
import AnimatedText from '@/components/animatedText';
import SimpleLink from '@/components/SimpleLink';

import Snake from '@/components/wallpapers/snake/Snake';
import GaussianOcean from '@/components/wallpapers/gaussianOcean/GaussianOcean';
import Sky from '@/components/wallpapers/sky/Sky';

import { PiMountainsFill } from "react-icons/pi";
import { GiFallingStar } from "react-icons/gi";
import { GiSandSnake } from "react-icons/gi";

export default function LandingTop() {
    const wallpaperTypes = {
        'sky': { 
            'icon': <GiFallingStar className='inline' />,
            'component': <Sky color="#500052" big_interval_time={2000} /> 
        },
        'snake': {
            'icon': <GiSandSnake className='inline' />,
            'component': (
                <>
                    <Snake color="purple" big_interval_time={3000} />
                    <Snake color="#500052" big_interval_time={2000} />
                </>
            )
        },
        'gaussianOcean': { 
            'icon': <PiMountainsFill className='inline' />,
            'component': <GaussianOcean color="purple" /> 
        }
    };
    const [wallpaperType, setWallpaperType] = useState('sky');

    return (
        <>
            <div
                className={`absolute h-full w-full z-10 pointer-events-none opacity-80`}
            >
                {wallpaperTypes[wallpaperType]['component']}
            </div>

            <div className="absolute left-4 top-4 z-50">
                <SimpleLink
                    content={{
                        title: <AiOutlineNumber />,
                        link: 'https://p1ps.net',
                        extern: true,
                    }}
                />
            </div>

            <div className="absolute right-4 bottom-4 z-50">
                <SimpleLink
                    content={{
                        title: <FaLink />,
                        link: '/links',
                    }}
                />
            </div>

            <div className="flex flex-col gap-2 md:gap-5 justify-center items-center flex-1 my-6 z-20">
                <div className="flex flex-col items-center gap-4">
                    <div className="flex w-[100px] md:w-[150px]">
                        <Portrait />
                    </div>

                    <div className="flex flex-col gap-1 text-center justify-center items-center w-full">
                        <div className="w-full">
                            <h1 className="text-3xl md:text-4xl">
                                <AnimatedText
                                    texts={['pierre fg', 'p1ps']}
                                    holdTime={3500}
                                />
                            </h1>
                        </div>

                        <div className="w-full">
                            <span>
                                {'/'} cartographie, informatique
                                <br />
                                {'/'} photographie, musique, illustration
                            </span>
                        </div>
                    </div>
                </div>

                <div className="py-4 md:py-8">
                    <MenuBar />
                </div>

                {/* <div className='flex flex-row gap-6 items-center text-small md:text-base mt-1 mb-1'>
                    <SimpleLink
                        content={{
                            title: (
                                <>
                                    Echoes from the Garden (nouv. EP&nbsp;
                                    <LuPartyPopper className="inline" />)
                                </>
                            ),
                            link: 'https://album.link/echoes_from_the_garden',
                            extern: true,
                        }}
                    />
                </div> */}

                <SocialIcons />
            </div>

            <div className="absolute right-4 top-4 z-50">
                <SimpleLink
                    content={{
                        title: (
                            <>
                                <AiOutlineFilePdf className="inline" />
                                &nbsp;cv
                            </>
                        ),
                        link: 'https://of5ylsz4mar7xvsj.public.blob.vercel-storage.com/pdfs/cv_pierrefg.pdf',
                        extern: true,
                    }}
                />
            </div>

            <div className="absolute left-4 bottom-4 z-50">
                {
                    Object.keys(wallpaperTypes).map((type) => (
                        <button
                            key={type}
                            className={`btn btn-sm btn-ghost rounded-full m-1 ${
                                wallpaperType === type ? 'btn-active' : ''
                            }`}
                            onClick={() => setWallpaperType(type)}
                        >
                            {wallpaperTypes[type]['icon']}
                        </button>
                    ))  
                }
            </div>

            <div className="flex justify-center mb-8 z-20">
                <Link
                    href="/#about"
                    className="btn btn-primary rounded-full flex justify-center items-center w-[40px] h-[40px] animate-bounce"
                >
                    <FaArrowDown className="text-2xl" />
                </Link>
            </div>
        </>
    );
}