import { IoArrowUpSharp  } from "react-icons/io5";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";


import AboutHeader from './header/aboutHeader';
import Teaching from "./teaching/teaching";
import Volunteering from "./volunteering/volunteering";
import Experience from "./experience/experience";
import Education from "./education/education";

export const aboutSections = [
    {
        title: <><IoArrowUpSharp className='inline' /></>,
        noTitle: true,
        id: 'header',
        link: '/about#header',
        section: <AboutHeader />
    },
    {
        title: <><AiOutlineTool className='title-icon' /> Expérience</>,
        id: 'experience',
        link: '/about#experience',
        section: <Experience />
    },
    {
        title: <><MdOutlineVolunteerActivism className='title-icon' /> Bénévolat</>,
        id: 'volunteering',
        link: '/about#volunteering',
        section: <Volunteering />
    },
    {
        title: <><IoSchoolOutline className='title-icon' /> Formation</>,
        id: 'education',
        link: '/about#education',
        section: <Education />
    },
    {
        title: <><PiChalkboardTeacherLight className='title-icon' /> Enseignement</>,
        id: 'teaching',
        link: '/about#teaching',
        section: <Teaching />
    }
];