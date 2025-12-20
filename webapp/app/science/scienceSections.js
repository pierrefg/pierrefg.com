import { IoDocumentsOutline } from "react-icons/io5";
import { GiChemicalDrop } from "react-icons/gi";
import { MdOutlineDataThresholding } from "react-icons/md";

import DataScience from "./data-science/dataScience";
import Research from "./research/research";
import Publications from "./publications/publications";

export const scienceSections = [
    {
        title: <><MdOutlineDataThresholding className='title-icon' /> Projets</>,
        id: 'projects',
        link: '/science#projects',
        section: <DataScience />
    },
    {
        title: <><GiChemicalDrop className='title-icon' /> Recherche</>,
        id: 'research',
        link: '/science#research',
        section: <Research />
    },
    {
        title: <><IoDocumentsOutline className='title-icon' /> Publications, séminaires...</>,
        id: 'publications',
        link: '/science#publications',
        section: <Publications />
    },
];