'use client';

import './style.css';

import React, { useState } from 'react';
import Image from "next/image";
import Overlay from '@/components/overlay/Overlay';

ImageGrid.makeTitle = (content) => {
    return (
        <>
            {content.title && (
                <div className="flex flex-col p-2 text-base text-center">
                    <h3 className="inline-block">{content.title}</h3>
                    <p className="inline-block text-sm text-primary-muted">
                        {content.place} {content.date && <>[{content.date}]</>}
                    </p>
                </div>
            )}
        </>
    );
};

export default function ImageGrid({ content }) {
    const [toShowInOverlay, setToShowInOverlay] = useState(null);

    return (
        <>
            {toShowInOverlay && (
                <Overlay onClose={() => setToShowInOverlay(null)} onClick={(e) => e.stopPropagation()}>
                    {toShowInOverlay}
                </Overlay>
            )}

            <div className="relative max-h-[85%] w-5/6 md:w-4/5 overflow-y-auto p-4" onClick={(e) => e.stopPropagation()}>
                
                <div className='p-4 bg-black text-center'>
                    {ImageGrid.makeTitle(content)}
                </div>

                {/* Masonry Columns */}
                <div className="columns-2 sm:columns-2 md:columns-2 lg:columns-4 gap-4 space-y-4">
                    {content.imgs.map((el, i) => (
                        <div
                            key={i}
                            className="break-inside-avoid"
                        >
                            <Image
                                src={el.img}
                                alt={`Image ${i + 1}`}
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 30vw"
                                className="w-full h-auto rounded object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
