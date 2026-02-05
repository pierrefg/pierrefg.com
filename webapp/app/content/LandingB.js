import Footer from "@/components/Footer";


import coverPic from './cover.jpg';
import SideImageLayout from "@/components/sideImageLayout";
import { landingBContent } from "./landingBContent";

import { MdOutlinePlace } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";

import { mainMenuLinks } from "@/components/menu/menuData";

import SimpleLink from "@/components/SimpleLink";

export default function About() {
    return (
        <>
            <div className='flex flex-grow justify-center items-center p-6 z-20'>
                <SideImageLayout
                    coverPic={coverPic}
                    title='Pierre Faure--Giovagnoli'
                >
                    <div className='flex flex-col gap-8'>
                        <div className="flex flex-col gap-0">
                            <span>
                                <MdOutlinePlace className="inline" /> Basé à Lyon
                            </span>
                            <span>
                                <IoLanguage className="inline" /> Parle le français, l'anglais et (un petit peu) l'allemand
                            </span>
                        </div>
                        {
                            landingBContent.map(
                                (el, index) => (
                                    <div key={index}>
                                        {el.content}
                                        <p className='mt-3 text-center'>
                                            <SimpleLink content={mainMenuLinks[el.linkIndex]} primary large />
                                        </p>
                                    </div>
                                )
                            )
                        }
                        <div className="text-primary-muted text-small">
                            Merci à Charlotte Delfosse et Arthur Navarro de m'avoir tiré le portrait.
                        </div>
                    </div>
                </SideImageLayout>
            </div>
            <Footer />
        </>
    ) 
}