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
        <div className="justify-center items-center flex flex-col gap-8">
            <Image
                src={CoverPic}
                alt='cover picture'
                className="rounded-full w-[200px] h-[200px] mx-auto"
                placeholder={'blur'}
                priority
            />
            <div className="flex flex-col gap-10 max-w-5xl">
                {
                    data.map(
                        (item, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <h3 className='text-left'>/ {item.title}</h3>
                                <div className="pl-2 lg:pl-12">
                                    <Timeline
                                        data = {item.content}
                                        authorData = {authorsData}
                                        largeDate = {true}
                                    />
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}