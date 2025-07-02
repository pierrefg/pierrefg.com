'use client';

import './style.css';

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Overlay from '@/components/overlay/Overlay';

ImageGrid.makeTitle = (content) => {
    return (
        <>
            {content.title && (
                <div className="flex flex-col p-2 text-base text-center">
                    <h3 className="inline-block">{content.title}</h3>
                    <p className="inline-block text-small text-primary-muted">
                        {content.place} {content.date && <>[{content.date}]</>}
                    </p>
                </div>
            )}
        </>
    );
};

export default function ImageGrid({ content}) {
    const [toShowInOverlay, setToShowInOverlay] = useState(null);

    return (<>
        {
                toShowInOverlay &&
                <Overlay onClose={() => setToShowInOverlay(null)} onClick={(e) => e.stopPropagation()}>{toShowInOverlay}</Overlay>
        }
        <div className="relative max-h-5-6 w-5/6 md:w-4/5 overflow-y-auto border" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 lg:p-4">
                {content.imgs.map((el, i) => (
                    <div 
                        key={i} 
                        className="relative flex items-center justify-center"
                        onClick={
                            () => setToShowInOverlay(
                                <Image 
                                    src={el.img}
                                    alt={`Image ${i + 1} full size`}
                                    height={800}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            )
                        }
                    >
                        <Image
                            src={el.img}
                            alt={`Image ${i + 1}`}
                            className="object-contain"
                            height={400}
                        />
                    </div>
                ))}
            </div>
        </div>
    </>);
    
}
