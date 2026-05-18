import Footer from "@/components/Footer";


import coverPic from './cover.jpg';
import SideImageLayout from "@/components/sideImageLayout";
import { landingBContent } from "./landingBContent";
import MenuBar from '@/components/menu/MenuButtons';

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
                        
                        Originaire d’Angoulême, je rejoins l’INSA Lyon en 2015 puis me spécialise en informatique en 2018. 
                        En parallèle, je m’ouvre à la recherche via un double diplôme avec Georgia Tech où je réalise un mémoire sur la reconnaissance de diatomées, microalgues (très jolies !) utilisées comme bio-indicateurs de la qualité de l’eau.
                        {/* <br /><br /> */}
                        Je poursuis ensuite en doctorat au LIRIS en partenariat avec la CNR. 
                        J’y étudie des données issues de capteurs fluviaux et hydroélectriques variés, croisées avec l’expertise métier et des données territoriales. 
                        Je m’intéresse également à l’explicabilité des modèles d’apprentissage automatique, notamment via l’analyse des contre-exemples.
                        <br /><br />
                        J'ai désormais pris la décision de m'orienter vers la cartographie afin de mettre mes compétences au service de la compréhension des territoires et de leurs enjeux, notamment environnementaux.
                        <br /><br />
                        En parallèle, je développe plusieurs pratiques artistiques. 
                        Formé inialement au violon et à la musique électroacoustique (DEM en 2014), je me consacre aujourd’hui principalement à la musique électronique et à la basse, en solo ou en groupe.
                        Je pratique aussi la photographie, notamment de manifestation, au sein du média Engrainage.
                        C’est également dans diverses associations que j’ai développé des compétences en graphisme, aussi bien en illustration qu’en design web.
                        <br /><br />
                        Ce site tente de réunir ces différentes facettes de mon parcours, en espérant que vous y trouverez des choses intéressantes !
                        N'hésitez pas à m'envoyer un petit messaghe si vous voulez discuter, collaborer ou juste dire bonjour :)
                        
                        {/* <MenuBar /> */}
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