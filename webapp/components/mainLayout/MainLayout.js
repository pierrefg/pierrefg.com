"use client";

import './style.css';

import { usePathname } from 'next/navigation';
import useStore from '@/store/useStore';

import MenuLayout from '@/components/menu/MenuLayout';

export default function MainLayout({ children }) {
    const { darkMode } = useStore();
    const pathname = usePathname();

    return (
        <div id="main-container" className={!darkMode && "light"}>
            {
                pathname === '/' ?
                <>{children}</>
                :
                <MenuLayout>{children}</MenuLayout>
            }
        </div>
    ) 
}