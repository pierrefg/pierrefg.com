import "./globals.css";
import "./button.css";
import "./decorations.css"
import "./bullets.css"
import "./animations.css"

import { josefinSans, monaspaceArgon } from "./fonts";
import MainLayout from "@/components/mainLayout/MainLayout";

import { createPageMetadata } from '@/utils/metadata';
import CursorTooltipProvider from "@/components/tooltip/CursorTooltipProvider";

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
			data-scroll-behavior="smooth"
		>
			<body>
				<CursorTooltipProvider>
					<MainLayout>{children}</MainLayout>
				</CursorTooltipProvider>
			</body>
		</html>
	);
}