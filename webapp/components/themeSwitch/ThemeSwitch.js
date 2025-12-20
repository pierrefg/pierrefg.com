'use client';

import './style.css';

import useStore from '@/store/useStore';

import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function ThemeSwitch() {
    const { darkMode, switchTheme } = useStore();

    const toggleTheme = () => {
        switchTheme();
    }

    return (
        <button 
            className={ `switch-body ${darkMode ? 'bg-white' : 'bg-black'}` }
            onClick={toggleTheme}
        >
            <div
                className={`switch-button ${darkMode ? 'bg-white translate-x-3/5' : 'bg-black translate-x-full'}`}
            >
                {darkMode ? <FaMoon className="text-black" size={20} /> : <MdSunny className="text-white" size={20} />}
            </div>
        </button>
    );
}
