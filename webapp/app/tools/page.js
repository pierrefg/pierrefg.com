import { createPageMetadata } from '@/utils/metadata';

import SimpleLink from '@/components/SimpleLink';

import { FaLink } from 'react-icons/fa6';
import { SiTaichigraphics } from "react-icons/si";
import { GiEating } from "react-icons/gi";

export const metadata = createPageMetadata(
    "Outils",
    "Quelques petits outils.",
    "/tools"
)

const tools = [
    {
        id: "eater",
        icon: <GiEating className="inline" />,
        name: "Mangeur de liens",
        link: "/eater"
    },
    {
        id: "graphics",
        icon: <SiTaichigraphics className="inline"/>,
        name: "Charte graphique",
        link: "/graphics"
    },
    {
        id: "link-tree",
        icon: <FaLink className="inline" />,
        name: "Arbre à lien",
        link: "/links"
    }
]

export default function Tools() {
    return (
        <div className='w-full flex-1 flex flex-col gap-6 mx-2 items-center justify-center'>
            <h1>Outils</h1>
            <div className='w-full flex flex-col gap-2 mx-2 items-center justify-center'>
                {tools.map((tool, _) => (
                    <SimpleLink
                        linkKey={tool.id}
                        primary={true}
                        content={{
                            icon: tool.icon,
                            title: tool.name,
                            link: tool.link
                        }}
                    />
                ))}
            </div>
        </div>
    )
}