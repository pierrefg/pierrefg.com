import './style.css'

import TimelineElement from "./TimelineElements";

export default function Timeline({ data, authorData, largeDate=false }) {
    return (
        <div>
            <div className="flex flex-col gap-6">
                {
                    data.map(
                        (elementData, index) => (
                            <div key={index} className="flex">
                                <TimelineElement 
                                    elementData={elementData} 
                                    authorData={authorData} 
                                    largeDate={largeDate}
                                />
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}