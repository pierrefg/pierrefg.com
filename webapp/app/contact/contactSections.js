import { MdOutlineDesignServices } from "react-icons/md";

import ContactSection from "./contactSection/contactSection";
import Services from "./services/services";

export const contactSections = [
    {
        noTitle: true,
        id: 'contactForm',
        link: '/contact#form',
        section: <ContactSection />
    },
    // {
    //     title: <><MdOutlineDesignServices className='title-icon' /> Prestations</>,
    //     section: <Services />
    // },
];