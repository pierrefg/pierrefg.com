import Image from "next/image";

import AnimatedText from "./animatedText";

export default function BackgroundImageLayout({children, icon, title, coverPic}) {
    return (
        <>
            <div className="relative min-h-[300px] flex items-center justify-center">
                <div className="absolute inset-0">
                    <Image
                        src={coverPic}
                        alt='cover picture'
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                        className="opacity-30"
                        priority
                    />
                </div>

                <div className="relative z-10 max-w-4xl p-6">
                    <h1 className="text-2xl lg:text-3xl mb-6">
                        {/* {icon} */}
                        / <AnimatedText targetText={title} />
                    </h1>
                    <div>
                        <>{"~"}</> {children}
                    </div>
                </div>
            </div>
        </>
    );
}
