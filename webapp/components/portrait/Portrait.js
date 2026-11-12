import Image from "next/image";

import portraitPic from './portrait.jpg';

export default function Portrait({ size = 220 }) {
    return (
        <Image
            src={portraitPic}
            alt="pierrefg"
            width={size}
            height={size}
            className="portrait-comp border-double border-4 border-primary"
            priority
        />
    );
}
