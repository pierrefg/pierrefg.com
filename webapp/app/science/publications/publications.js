import Image from "next/image";
import CoverPic from "./talk.jpg";

import Timeline from "@/components/timeline/Timeline";

import { publicationsData } from "./data/publicationsData";
import { authorsData } from "./data/authorsData";
import { seminarsData } from "./data/seminarsData";
import { softwareData } from './data/softwareData';
import { miscData } from './data/miscData';

import { IoDocumentsOutline } from "react-icons/io5";
import { RiPresentationFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { VscSymbolMisc } from "react-icons/vsc";

var data = [
    {
        title: 'Publications',
        content: publicationsData
    },
    {
        title: 'Séminaires',
        content: seminarsData
    },
    {
        title: 'Logiciels',
        content: softwareData
    },
    {
        title: 'Divers',
        content: miscData
    },
]

export default function Publications() {
    return (
        <div className="justify-center">
            <Image
                src={CoverPic}
                className="rounded-full w-[200px] h-[200px] mx-auto"
                placeholder={'blur'}
                priority
            />
            
            {
                data.map(
                    (item, index) => (
                        <div key={index}>
                            <h3 className='text-center my-[40px]'>/// {item.title}</h3>
                            <Timeline
                                data = {item.content}
                                authorData = {authorsData}
                                largeDate = {true}
                            />
                        </div>
                    )
                )
            }

            {/* <h3 className='text-center my-[40px]'>/// Publications</h3>
            <Timeline
                Icon = {IoDocumentsOutline}
                title = "Publications"
                data = {publicationsData}
                authorData = {authorsData}
                largeDate = {true}
            />
            <h3 className='text-center my-[40px]'>/// Séminaires</h3>
            <Timeline
                Icon = {RiPresentationFill}
                title = "Séminaires"
                data = {seminarsData}
                authorData = {authorsData}
                largeDate = {true}
            />
            <h3 className='text-center my-[40px]'>/// Logiciels</h3>
            <Timeline
                Icon = {FaCode}
                title = "Logiciels"
                data = {softwareData}
                authorData = {authorsData}
                largeDate = {true}
            />
            <h3 className='text-center my-[40px]'>/// Divers</h3>
            <Timeline
                Icon = {VscSymbolMisc}
                title = "Divers"
                data = {miscData}
                largeDate = {true}
            /> */}
        </div>
    );
}