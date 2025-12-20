import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdOutlinePolyline } from "react-icons/md";
import { RiVideoOnLine } from "react-icons/ri";

import Graphics from "./graphics/graphics";
import Photography from "./photography/photography";
import Music from "./music/music";
import Video from "./video/video";

export const artSections = [
    {
        title: <><MdOutlinePhotoCamera className='title-icon' /> Photographie</>,
        id: 'photography',
        link: '/art#photography',
        section: <Photography />,
        fullWidth: true
    },
    {
        title: <><MdOutlinePolyline className='title-icon' /> Graphisme</>,
        id: 'graphics',
        link: '/art#graphics',
        section: <Graphics />,
        fullWidth: true
    },
    {
        title: <><IoMusicalNoteOutline className='title-icon' /> Musique</>,
        id: 'music',
        link: '/art#music',
        section: <Music />,
        fullWidth: true
    },
    {
        title: <><RiVideoOnLine className='title-icon' /> Vidéo</>,
        id: 'video',
        link: '/art#video',
        section: <Video />
    },
];