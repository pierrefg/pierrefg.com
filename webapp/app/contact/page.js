import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { mainMenuLinks } from '@/components/menu/menuData';
import { contactSections } from './contactSections';

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Contact",
    "Contactez-moi pour toute question, collaboration ou demande d'information.",
    "/contact"
)

export default function Contact() {
    return (
        <SubMenuLayout pageDescription={mainMenuLinks[3]} noMenu pagesData={contactSections} />
    );
}
