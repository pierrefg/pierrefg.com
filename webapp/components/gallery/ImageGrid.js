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
                
                {/* Masonry Columns */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                    {content.imgs.map((el, i) => (
                        <div
                            key={i}
                            className="break-inside-avoid cursor-pointer"
                            onClick={() =>
                                setToShowInOverlay(
                                    <Image
                                        src={el.img}
                                        alt={`Image ${i + 1} full size`}
                                        width={1000}
                                        height={1000}
                                        className="w-auto h-auto max-w-full max-h-screen object-contain"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                )
                            }
                        >
                            <Image
                                src={el.img}
                                alt={`Image ${i + 1}`}
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 10vw"
                                // sizes="5vw"
                                // placeholder="blur"
                                // blurDataURL={el.blurDataURL || '/placeholder.png'} // fallback
                                className="w-full h-auto rounded object-cover transition duration-200 hover:brightness-110 shadow-sm"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
