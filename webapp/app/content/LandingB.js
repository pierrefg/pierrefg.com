
import Link from "next/link";

import Footer from "@/components/Footer";
import coverPic from './cover.jpg';
import SideImageLayout from "@/components/sideImageLayout";
import { landingBContent } from "./landingBContent";
import MenuBar from '@/components/menu/MenuButtons';

import { FaArrowUp } from "react-icons/fa";

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
                                <MdOutlinePlace className="inline" /> Lyon
                            </span>
                            <span>
                                <IoLanguage className="inline" /> Français, anglais et (un petit peu) allemand
                            </span>
                        </div>
                        
                        <p>
                            Originaire d’Angoulême, je rejoins{" "}
                            <a
                                href="https://www.insa-lyon.fr/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-link"
                            >
                                l’INSA Lyon
                            </a>{" "}
                            en 2015 puis me spécialise en{" "}
                            <a
                                href="https://www.insa-lyon.fr/fr/formation/informatique"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-link"
                            >
                                informatique
                            </a>{" "}
                            en 2018. 
                            En parallèle, je m’ouvre à la recherche via un double diplôme avec{" "}
                            <a
                                href="https://www.gatech.edu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-link"
                            >
                                Georgia Tech
                            </a>{" "}
                            où je réalise un mémoire sur la reconnaissance de diatomées, microalgues (
                            <a
                                href="https://duckduckgo.com/?q=diatomées&iar=images&t=h_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-link"
                            >
                                très jolies !
                            </a>) utilisées comme bio-indicateurs de la qualité de l’eau.
                            {/* <br /><br /> */}
                            Je poursuis ensuite en doctorat au{" "}
                            <a
                                href="https://liris.cnrs.fr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-link"
                            >
                                LIRIS
                            </a>{" "}en partenariat avec la{" "}
                            <a
                                href="https://www.cnr.tm.fr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-link"
                            >
                                CNR
                            </a>. 
                            J’y étudie des données issues de capteurs fluviaux et hydroélectriques variés, croisées avec l’expertise métier et des données territoriales. 
                            Je m’intéresse également à l’explicabilité des modèles d’apprentissage automatique, notamment via l’analyse des contre-exemples.
                        </p>
                        <p>
                            Après 2 ans comme ingénieur de recherche au LIRIS, je m'oriente aujourd'hui vers la cartographie afin de mettre mes compétences au service de la compréhension des territoires et de leurs enjeux, notamment environnementaux.
                        </p>
                        <p>
                            En parallèle, je développe plusieurs pratiques artistiques. 
                            Formé inialement au violon et à la musique électroacoustique (DEM en 2014), je me consacre aujourd’hui principalement à la musique électronique et à la basse, en solo ou en groupe.
                            Je pratique aussi la photographie, notamment de manifestation, au sein du média{" "}
                            <a
                                href="https://engrainage-media.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-link"
                            >
                                Engrainage
                            </a>.
                            C’est également dans diverses associations que j’ai développé des compétences en graphisme, aussi bien en illustration qu’en design web.
                        </p>
                        <p>
                            Ce site tente de réunir ces différentes facettes de mon parcours, en espérant que vous y trouverez des choses intéressantes !
                            N'hésitez pas à m'envoyer un petit messaghe si vous voulez discuter, collaborer ou juste dire bonjour :)
                        </p>
                        {/* <MenuBar /> */}
                    
                        <div className="flex justify-center z-20 ">
                            <Link
                                href='/#homescreen'
                                className='btn btn-primary rounded-full flex justify-center items-center w-[40px] h-[40px] animate-bounce'
                            >
                                <FaArrowUp className='text-2xl' />
                            </Link>
                        </div>

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