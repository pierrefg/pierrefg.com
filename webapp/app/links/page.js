import { createPageMetadata } from '@/utils/metadata';

import SimpleLink from '@/components/SimpleLink';
import SocialIcons from '@/components/SocialIcons';
import Snake from "@/components/snake/Snake";
import Sky from "@/components/sky/Sky";
import Portrait from "@/components/portrait/Portrait";
import AnimatedText from '@/components/animatedText';

export const metadata = createPageMetadata(
    "Linktree",
    "Trouve ici mes liens vers mes différents projets et réseaux sociaux.",
    "/links"
)

var links = [
    {
        title: "Echoes from the Garden [EP]",
        link: "https://album.link/echoes_from_the_garden",
        extern: true
    },
    {
        title: "La Dernière Vague [single]",
        link: "https://song.link/la_derniere_vague",
        extern: true
    },
    {
        title: "pierrefg.com",
        link: "https://www.pierrefg.com/",
    },
    {
        title: "p1ps.net",
        link: "https://p1ps.net/",
        extern: true
    }
];

export default function Links() {
    return (
        <>
            <div className={`absolute h-full w-full z-10 pointer-events-none`}>
                {/* <Snake color = "purple" big_interval_time={3000}/>
                <Snake color = "#500052" big_interval_time={2000}/> */}
                <Sky color = "#500052" big_interval_time={2000}/>
            </div>

            <div className="flex flex-col gap-4 justify-center z-20 items-center h-screen">
                <div className="flex w-[100px] md:w-[150px] z-20">
                    <Portrait />
                </div>
                <div className="flex flex-col gap-1 text-center justify-center items-center w-full z-20">
                    <div className="w-full">
                        <h1 className="text-3xl md:text-4xl">
                        <AnimatedText
                            texts={[
                                'pierre fg', 'p1ps'
                            ]}
                            holdTime={3500}
                        />
                        </h1>
                    </div>
                    <div className="w-full">
                        <span>
                            {'/'} cartographie, informatique
                            <br />
                            {'/'} photographie, musique, illustration
                        </span>
                    </div>
                </div>
                <div className='z-20'>
                    <SocialIcons />
                </div>
                <div className="flex flex-col gap-2 justify-center items-center z-20">
                    {links.map((el, _) => (
                        <SimpleLink 
                            key={el.link}
                            linkKey={el.link} 
                            content={el} 
                            primary 
                            large
                        />
                    ))}
                </div>
            </div>
        </>
    );
}