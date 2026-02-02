import "./globals.css";
import "./button.css";

import { josefinSans, monaspaceArgon } from "./fonts";
import MainLayout from "@/components/mainLayout/MainLayout";

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
  "Accueil",
  "Science des données • Graphisme • Photographie • Musique / Viens découvrir ce que je fais !",
  ""
);

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${josefinSans.variable} ${monaspaceArgon.variable}`}
    >
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}