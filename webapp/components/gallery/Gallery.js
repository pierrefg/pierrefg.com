'use client';

import Image from "next/image";
import React, { useState } from 'react';

import Overlay from '@/components/overlay/Overlay';

export default function Gallery({ galleryContent, GalleryObject }) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [overlayContent, setOverlayContent] = useState('Error. You shouldn\'t see this message...');

    const onImageClick = (elementData) => {
        setOverlayContent(<GalleryObject content={elementData} />);
        setShowOverlay(true);
    }

    return (
        <div className="flex flex-col w-full">
            { showOverlay && <Overlay onClose={() => setShowOverlay(false)}>{overlayContent}</Overlay> }
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 md:p-4">
                {galleryContent.map((carrouselData, index) => (
                    <div 
                        className="flex flex-col items-center text-center" 
                        key={index}
                        onClick={() => onImageClick(carrouselData)}
                    >
                        <div className="btn relative flex items-center justify-center group">
                            <span className="absolute text-white bg-black p-1 opacity-0 group-hover:opacity-100">
                                voir +
                            </span>
                            <Image
                                src={carrouselData.imgs[0].img}
                                alt={`Image ${index + 1}`}
                                // height={300}
                                className="object-contain h-[200px] md:h-[300px]"
                            />
                        </div>

                        <div className="h-[60px] flex items-center">
                            { GalleryObject.makeTitle(carrouselData) }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
