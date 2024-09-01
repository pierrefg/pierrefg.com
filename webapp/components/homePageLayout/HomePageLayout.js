import Image from "next/image";

export default function HomePageLayout({children, title, coverPic}) {
    return (
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="col-span-1 md:col-span-1 flex justify-center md:h-full">
                <Image
                    src={coverPic}
                    className="object-cover w-[150px] h-[150px] md:w-full md:h-full rounded-full md:rounded-none"
                    priority
                />
            </div>
            <div className="col-span-1 md:col-span-3 flex flex-col gap-4">
                <h1 className="text-xl">
                    {title}
                </h1>
                <div className="flex flex-col gap-4 md:min-h-[600px]">
                    {children}
                </div>
            </div>
        </div>
    );
}