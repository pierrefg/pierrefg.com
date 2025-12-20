import { MdOutlineDesignServices } from "react-icons/md";

import ContactSection from "./contactSection/contactSection";
import Services from "./services/services";

export const contactSections = [
    {
        noTitle: true,
        section: <ContactSection />
    },
    {
        title: <><MdOutlineDesignServices className='title-icon' /> Prestations</>,
        section: <Services />
    },
];