'use client';

import { useState } from 'react';
import Link from 'next/link';

import SimpleLink from '@/components/SimpleLink';

import Blobs from '@/components/wallpapers/blobs/Blobs';
import Snake from '@/components/wallpapers/snake/Snake';
import GaussianOcean from '@/components/wallpapers/gaussianOcean/GaussianOcean';
import Sky from '@/components/wallpapers/sky/Sky';

import { PiMountainsFill } from "react-icons/pi";
import { GiFallingStar } from "react-icons/gi";
import { GiSandSnake } from "react-icons/gi";
import { GiBurstBlob } from "react-icons/gi";
import { FaArrowDown } from 'react-icons/fa';
import { AiOutlineNumber, AiOutlineFilePdf } from 'react-icons/ai';
import { FaLink } from 'react-icons/fa6';
import { IoHammerOutline } from "react-icons/io5";
import LandingMenu from './LandingMenu';

export default function LandingTop() {
    const wallpaperTypes = {
        'blobs': { 
            'icon': <GiBurstBlob className='inline' />,
            'component': <Blobs /> 
        },
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
    const [wallpaperType, setWallpaperType] = useState('blobs');

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
                        title: <IoHammerOutline />,
                        link: '/tools',
                    }}
                />
            </div>

            <LandingMenu />

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
                    <FaArrowDown className="text-2xl rotate-animation" />
                </Link>
            </div>
        </>
    );
}