import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { mainMenuLinks } from '@/components/menu/menuData';
import { artSections } from './artSections';

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Portfolio artistique",
    "Trouve ici mon portfolio mêlant graphisme, photographie, musique et vidéo.",
    "/art"
)

export default function Art() {
    return (
        <SubMenuLayout pageDescription={mainMenuLinks[2]} pagesData={artSections} />
    );
}