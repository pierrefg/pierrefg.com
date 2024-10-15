import "./globals.css";
import "./button.css";

import React, { Suspense } from 'react';

import MainLayout from "@/components/mainLayout/MainLayout";
import Loader from "@/components/loader/Loader";

// VERCEL
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Accueil",
    "Science des données • Graphisme • Photographie • Musique / Viens découvrir ce que je fais !",
    ""
)

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <head>
                <link rel="stylesheet" href="https://use.typekit.net/dsi6anx.css" />
            </head>
            <body>
                <Analytics />
                <SpeedInsights />
                <Suspense fallback={<Loader />}>
                    <MainLayout>{children}</MainLayout>
                </Suspense>
            </body>
        </html>
    );
}
