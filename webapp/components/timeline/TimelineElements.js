import { IoMdPerson } from "react-icons/io";
import { FaBuilding, FaStar } from "react-icons/fa";
import { MdMergeType } from "react-icons/md";
import { FaCircleInfo, FaCirclePlus } from "react-icons/fa6";

import ButtonsList from "@/components/ButtonsList";

export default function TimelineElement({ elementData, authorData, largeDate=false }) {
    if (!elementData) return null;

    if (largeDate) var divClassName = "grid md:grid-cols-[150px_1fr] md:gap-6"
    else var divClassName = "grid md:grid-cols-[100px_1fr] md:gap-6"

    return (
        <div className={divClassName}>

            {/* Visible on Medium and Larger Screens */}
            <div className="hidden md:block">
                <time>{elementData.period}</time><br />
                {elementData.type && (
                    <span className="text-small text-primary-muted">
                        {elementData.type}
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div>
                <p className="font-semibold">
                    {  
                        elementData.title.link ?
                            <a href={elementData.title.link} target="_blank" rel="noopener noreferrer">
                                <span>{elementData.title.name} {elementData.title.postname}</span>
                            </a>
                        :
                        <span>{elementData.title.name} {elementData.title.postname}</span>
                    }
                </p>

                <div className="text-small text-primary-muted pl-0">
                    {/* SUBTITLE */}
                    {
                        elementData.subtitle &&
                        <>
                            <MdMergeType className="inline" /> {elementData.subtitle}
                        </>
                    }
                    

                    {
                        elementData.authors && 
                        <>  
                            <><IoMdPerson className="inline" /> </>
                            {
                                elementData.authors.map((authorId, index) => (
                                    <span key={index}>
                                        {authorData[authorId].name} {authorData[authorId].surname}
                                        {index<(elementData.authors.length-1) && <>, </>}
                                    </span>
                                ))
                            }
                        </>
                        
                    }

                    {/* Visible on Smaller Screens */}
                    <span className="md:hidden block">
                        <time>{elementData.period}</time><br className="hidden md:block"/>
                        {elementData.type && (
                            <span className="text-small text-primary-muted">
                                <span> | </span>{elementData.type}
                            </span>
                        )}
                    </span>
                    
                    {/* COMPANIES */}
                    {
                        elementData.companies &&
                        <div>
                            {
                                elementData.companies.map((company, index) => (
                                    <span key={index}>
                                        { (company.context || index==0) && <><FaBuilding className="inline" /> </> }
                                        { (index>0 && !company.context) && <><span className="hidden md:inline">, </span><br className="block md:hidden" /></> }
                                        {
                                            company.link ?
                                            <span>
                                                <a href={company.link} target="_blank" rel="noopener noreferrer">
                                                    {/* <IoLink className="inline"/> */}
                                                    <> {company.name}</>
                                                    {
                                                        company.place &&
                                                        <span className="hidden md:inline"> ({company.place})</span>
                                                    }  
                                                </a>
                                            </span>
                                            
                                            : 
                                            <>
                                                <> {company.name}</>
                                                {
                                                    company.place &&
                                                    <span className="hidden md:inline"> ({company.place})</span>
                                                }  
                                            </>
                                        }
                                        { company.context && <span> • {company.context}</span> }
                                        { company.date && <span> • {company.date}</span> }
                                        { company.context && <br /> }
                                    </span>
                                ))
                            }
                        </div>
                    }
                    
                    {/* DESCRIPTION */}
                    {
                        elementData.description &&
                            <div className="italic">
                                <><FaCircleInfo className="inline" /> </>
                                {elementData.description}
                            </div>
                    }

                    {/* HIGHLIGHT */}
                    {
                        elementData.highlight && 
                        <div>
                            <><FaStar className="inline" /> </>
                            {   
                                elementData.highlight.url ?
                                <a  href={elementData.highlight.url} target="_blank" rel="noopener noreferrer">
                                    {elementData.highlight.text}
                                </a>
                                :
                                <>{elementData.highlight.text}</>
                            }
                        </div>
                    }

                    {/* LINKS */}
                    {
                        elementData.links && 
                        <div className="flex flex-row items-center gap-2 leading-6">
                            <FaCirclePlus className="inline mt-2" /> <ButtonsList links={elementData.links} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}