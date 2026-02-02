import ButtonsList from "@/components/ButtonsList";
import ShowMore from "@/components/ShowMore";
import Image from "next/image";

export default function Project({data}) {
    return (
        <div id={data.id} className="flex flex-col gap-6">
            {
                data.icon && (
                <div className="flex justify-center items-center gap-2 text-center">
                    <data.icon className="text-3xl" />
                    {data.type && <h3>{data.type}</h3>}
                </div>
                )
            }

            <div className="text-center">
                <h3>{data.title}</h3>
                <p className="slant-sm">{data.subtitle}</p>
                <p className="pt-6">{data.period}</p>
            </div>
            
            {
                data.links &&
                <div className="mx-auto leading-8 text-center">
                    <ButtonsList links={data.links} />
                </div>
            }
            
            {
                data.peopleIntro &&
                <div className="text-center">
                    {data.peopleIntro}
                </div>
            }

            {
                data.people &&
                <div className="flex flex-col mx-auto gap-4">
                    {
                        data.people.map(
                            (data, index) => (
                                <div key={index} className="flex flex-row items-center">
                                    <div className="w-[140px] md:text-right md:mr-4">
                                        {data.role}
                                    </div>
                                    <div className="border-l-solid md:border-l-2 md:border-l-primary-muted md:pl-4">
                                        {
                                            data.list.map(
                                                (people, index) => (
                                                    <p key={index}>{people.name} {people.surname}</p>
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            } 
            <div className="md:flex w-full md:flex-row justify-center md:items-center md:px-8">
                {
                    data.img &&
                    <div className="mx-auto text-center md:w-2/5 md:pr-8 pb-6">
                        <Image
                            src={data.img}
                            alt='project cover picture'
                            className="mx-auto rounded-full w-3/5 md:w-[250px]"
                        />
                        <p className="text-primary-muted slant-sm pt-2">{data.imgLegend}</p>
                    </div>
                }  
                
                    <div className="px-2 md:px-8 border-l-solid border-l-primary-muted border-l-2 text-small md:text-base text-justify md:w-3/5">
                        <ShowMore>
                            {data.summary}
                        </ShowMore>
                    </div>
            </div>
                                
            
        </div>
    );
}