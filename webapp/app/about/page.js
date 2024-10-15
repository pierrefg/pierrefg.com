import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { mainMenuLinks } from '@/components/menu/menuData';
import { aboutSections } from './aboutSections';

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Mon parcours",
    "Découvrez ici mon parcours académique, bénévole et professionnel.",
    "/about"
)

export default function About() {
    return (
        <SubMenuLayout pageDescription={mainMenuLinks[0]} pagesData={aboutSections} />
    );
}