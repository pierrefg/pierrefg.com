"use client";

import './style.css';

import useStore from '@/store/useStore';

import Link from "next/link";

import ThemeSwitch from '@/components/themeSwitch/ThemeSwitch';
import Portrait from '@/components/portrait/Portrait';
import SocialIcons from '@/components/SocialIcons';
import MenuButtons from '@/components/menu/MenuButtons';

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function MenuBar() {
    const { menuOpen, switchMenu } = useStore();

    return (
        <>
            <div className="menu-bar z-50">
                <div className="flex items-center justify-between max-w-7xl mx-auto px-4 h-full">
                    <div className="flex items-center h-full">
                        <Link href="/" passHref>
                            <Portrait size={50}/>
                        </Link>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex flex-1 justify-center items-center h-full">
                        <MenuButtons />
                    </div>

                    <div className="hidden lg:flex items-center h-full">
                        <SocialIcons />
                    </div>

                    <div className='flex items-center text-center lg:hidden text-1xl h-full'>
                        <h2>pierre fg</h2>
                    </div>
                    
                    {/* Hamburger Menu Icon */}
                    <button
                        className="lg:hidden flex items-center px-3 py-2 text-2xl"
                        onClick={switchMenu}
                    >
                        {
                            menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />
                        }
                    </button>
                </div>

                {/* Mobile Menu */}
                
                {menuOpen && (
                    <div className="mobile-menu-bar fixed w-full flex flex-col z-50">
                        <div className='flex flex-col items-center gap-6'>
                            <div className='flex'>
                                <MenuButtons toDoOnElementClick={switchMenu} />
                            </div>
                            <div className='flex'>
                                <SocialIcons />
                            </div>
                            <div className='flex h-[50px]'>
                                <ThemeSwitch />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
