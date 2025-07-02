import { legalData } from "./data"

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Mentions légales",
    "Mentions légales du site pierrefg.com.",
    "/legals"
)

export default function Legals() {

    return (
            <div className="px-4 mx-auto mt-[20px] max-w-4xl">
                <h1 className="text-center">
                    Mentions légales
                </h1>

                <div className="flex flex-col gap-6 lg:items-center mt-6">  {/* Added items-center to center the content */}
                    {
                        legalData.map(
                            (data, index) => (
                                <div key={index} className="lg:flex lg:flex-row justify-center">  {/* Added w-full and justify-center */}
                                    <div className="lg:w-[300px] lg:text-right lg:mr-4 underline lg:no-underline">
                                        <h3>{data.title}</h3>
                                    </div>
                                    <div className="lg:w-[400px] border-l-solid lg:border-l-2 lg:border-l-primary-muted lg:pl-4">
                                        {data.content}
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
    )
}