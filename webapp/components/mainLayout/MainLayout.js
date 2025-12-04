"use client";

import './style.css';

import React, { Suspense } from 'react';

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Loader from "@/components/loader/Loader";

import { usePathname } from 'next/navigation';
import useStore from '@/store/useStore';

import MenuLayout from '@/components/menu/MenuLayout';

export default function MainLayout({ children }) {
    const { darkMode } = useStore();
    const pathname = usePathname();

    return (
        <html className={['/', '/xp'].includes(pathname)  ? "nothing" : "scroll-padding"} lang="fr">
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/dsi6anx.css" />
            </head>
            <body>
                <Analytics />
                <SpeedInsights />
                <Suspense fallback={<Loader />}>
                    <div id="main-container" className={!darkMode ? "light" : ""}>
                        {
                            ['/', '/xp'].includes(pathname) ?
                            <>{children}</>
                            :
                            <MenuLayout>{children}</MenuLayout>
                        }
                    </div>
                </Suspense>
            </body>
        </html>
    ) 
}