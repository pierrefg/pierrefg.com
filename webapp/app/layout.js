import "./globals.css";
import "./button.css";

import MainLayout from "@/components/mainLayout/MainLayout";

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Accueil",
    "Science des données • Graphisme • Photographie • Musique / Viens découvrir ce que je fais !",
    ""
)

export default function RootLayout({ children }) {
    return (
        <MainLayout>{children}</MainLayout>
    );
}
