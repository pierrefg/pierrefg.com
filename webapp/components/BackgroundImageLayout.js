import Image from "next/image";

import AnimatedText from "./animatedText";

export default function BackgroundImageLayout({children, icon, title, coverPic}) {
    return (
        <>
            <div className="relative w-full min-h-[300px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src={coverPic}
                        alt="Background image"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="opacity-30"
                        placeholder={'blur'}
                        priority
                    />
                </div>

                <div className="absolute inset-0bg-opacity-50"></div>

                <div className="relative z-10 max-w-4xl p-6">
                    <h1 className="text-2xl md:text-3xl mb-6">
                        {icon} <AnimatedText targetText={title} />
                    </h1>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
