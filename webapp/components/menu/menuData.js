import { BiGame } from "react-icons/bi";
import { AiOutlineExperiment } from "react-icons/ai";
import { LuPaintbrush } from "react-icons/lu";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { LuPartyPopper } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";

import aboutCover from './imgs/about_cover.jpg';
import artCover from './imgs/art_cover.jpg';
import scienceCover from './imgs/science_cover.jpg';
import contactCover from './imgs/contact_cover.jpg';

export const mainMenuLinks = [
    {
        icon: <BiGame className='icon' />,
        title: 'Mon parcours',
        link: '/about',
        description: "Découvrez ici un aperçu de mon parcours professionnel et bénévole, ainsi que des établissements dans lesquels j'ai étudié ou enseigné.",
        coverPic: aboutCover
    },
    {
        icon: <FaCode className='icon' />,
        title: 'Informatique',
        link: '/science',
        description: "Retrouvez ici mes projets de science des données, mes sujets de recherche ainsi qu'un petit inventaire de mes publications, logiciels et séminaires.",
        coverPic: scienceCover
    },
    {
        icon: <LuPaintbrush className='icon'/>,
        title: 'Porfolio artistique',
        link: '/art',
        description: "De graphisme spatial à photographie militante en passant par motion design et musique électroacoustique, vous trouverez ici un aperçu de mes activités artistiques ! ",
        coverPic: artCover
    },
    {
        icon: <RiQuestionAnswerLine className='icon'/>,
        title: 'Contact',
        link: '/contact',
        description: <>
            Pour tout projet, toute collaboration ou question : n'hésitez pas ! <LuPartyPopper className='inline' />
            <br />
            Retrouvez également l'ensemble de mes prestations ci-dessous.
        </>,
        coverPic: contactCover
    }
]; 