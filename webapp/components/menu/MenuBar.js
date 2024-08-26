"use client";

import './style.css';

import Link from "next/link";
import { useState } from 'react';

import Portrait from '@/components/Portrait';
import SocialIcons from '@/components/SocialIcons';
import MenuButtons from '@/components/menu/MenuButtons';

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function MenuBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const hideMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="menu-bar">
            <div className="flex items-center justify-between max-w-6xl mx-auto px-4 h-full">
                <div className="flex items-center h-full">
                    <Link href="/" passHref>
                        <Portrait size={50}/>
                    </Link>
                </div>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-center items-center h-full">
                    <MenuButtons />
                </div>

                <div className="hidden md:flex items-center h-full">
                    <SocialIcons />
                </div>

                <div className='flex items-center text-center md:hidden text-1xl h-full'>
                    Pierre FG
                </div>
                
                {/* Hamburger Menu Icon */}
                <button
                    className="md:hidden flex items-center px-3 py-2 text-2xl"
                    onClick={toggleMenu}
                >
                    {
                        menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />
                    }
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 bg-black pt-4">
                    <MenuBar toDoOnElementClick={hideMenu} />
                    <SocialIcons />
                </div>
            )}
        </div>
    );
}
