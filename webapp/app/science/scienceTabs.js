import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentsOutline } from "react-icons/io5";
import { GiChemicalDrop } from "react-icons/gi";
import { MdOutlineDataThresholding } from "react-icons/md";

export const scienceTabs = [
    {
        title: <span><AiOutlineHome className='inline' /></span>,
        link: '/science',
    },
    {
        title: <span><MdOutlineDataThresholding className='inline' /> Science des données</span>,
        link: '/science/data-science'
    },
    {
        title: <span><GiChemicalDrop className='inline' /> Recherche</span>,
        link: '/science/research'
    },
    {
        title: <span><IoDocumentsOutline className='inline' /> Publications, séminaires...</span>,
        link: '/science/publications'
    },
];