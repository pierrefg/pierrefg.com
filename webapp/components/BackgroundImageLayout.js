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
                        fill
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        className="opacity-60"
                        priority
                    />
                </div>

                <div className="relative z-10 max-w-4xl text-frame">
                    <h1 className="text-2xl lg:text-3xl mb-6">
                        {/* {icon} */}
                        / <AnimatedText texts={[title]} />
                    </h1>
                    <div>
                        <>{"~"}</> {children}
                    </div>
                </div>
            </div>
        </>
    );
}
