import './style.css';

import useStore from '@/store/useStore';

import MenuBar from "./MenuBar";
import Footer from "../Footer";

import ThemeSwitch from '@/components/themeSwitch/ThemeSwitch';

export default function MenuLayout({ children }) {
    const { menuOpen, switchMenu } = useStore();

    return (
        <div className='flex flex-col min-h-screen'>
            {/* ThemeSwitch positioning */}
            {/* <div className='z-50 fixed hidden lg:block bottom-[50px] right-[50px]'>  
                <ThemeSwitch />
            </div> */}

            {/* MenuBar section */}
            <div className="z-30">
                <MenuBar />
            </div>

            {/* Main content area */}
            <div
                className={`menu-content ${menuOpen ? "opacity-40" : ""}`}
                onClick={menuOpen ? switchMenu : null}
            >
                {children}
            </div>

            {/* Copyright section */}
            <div className={`mt-auto pt-8 ${menuOpen ? "opacity-40" : ""}`}>
                <Footer />
            </div>
        </div>
    );
}
