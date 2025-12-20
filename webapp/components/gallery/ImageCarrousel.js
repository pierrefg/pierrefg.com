'use client';

import './style.css';

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Overlay from '@/components/overlay/Overlay';

ImageCarrousel.makeTitle = (content) => {
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

export default function ImageCarrousel({ content, size=350 }) {
    const galleryLength = content.imgs.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageWidths, setImageWidths] = useState([]);
    const [isScrollable, setIsScrollable] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);

    const [toShowInOverlay, setToShowInOverlay] = useState(null);

    const imageContainerRef = useRef(null);

    useEffect(() => {
        if (imageContainerRef.current) {
            setIsScrollable(imageContainerRef.current.scrollWidth > imageContainerRef.current.clientWidth);
        }
    }, [imageWidths]);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setIsNavigating(true);
            setCurrentIndex(newIndex);
            scrollToImage(newIndex);
            setTimeout(() => setIsNavigating(false), 300);
        }
    };
    
    const handleNextClick = () => {
        if (currentIndex < galleryLength - 1) {
            const newIndex = currentIndex + 1;
            setIsNavigating(true);
            setCurrentIndex(newIndex);
            scrollToImage(newIndex);
            setTimeout(() => setIsNavigating(false), 300);
        }
    };

    const scrollToImage = (index) => {
        if (imageContainerRef.current && imageWidths[index]) {
            const containerWidth = imageContainerRef.current.clientWidth;
            const imageWidth = imageWidths[index];
            
            const scrollLeft = imageWidths.slice(0, index).reduce((acc, width) => acc + width + 20, 0)
                - (containerWidth / 2) + (imageWidth / 2);
    
            imageContainerRef.current.scrollLeft = scrollLeft;
        }
    };

    const handleImageLoad = (index, event) => {
        const { width } = event.target;
        setImageWidths((prevWidths) => {
            const newWidths = [...prevWidths];
            newWidths[index] = width;
            return newWidths;
        });
    };

    const handleScroll = (e) => {
        if (isNavigating) return;
    
        const target = e.target;
        const scrollPosition = target.scrollLeft;
        const scrollableWidth = target.scrollWidth - target.clientWidth;
        const ratio = scrollPosition / scrollableWidth;
        const newIndex = Math.round(ratio * (galleryLength - 1));
    
        setCurrentIndex(newIndex);
    };

    return (<>
        {
            toShowInOverlay &&
            <Overlay onClose={() => setToShowInOverlay(null)}>{toShowInOverlay}</Overlay>
        }
        <div 
            className="gallery"
            onClick={(e) => e.stopPropagation()}
        >
            { ImageCarrousel.makeTitle(content) }
            
            <div 
                className="flex flex-row items-center gap-4 max-w-7xl mx-auto"$
            >
                <div className='w-[40px] hidden md:block'>
                    {
                        isScrollable &&
                        <MdNavigateBefore 
                            className={`w-[40px] text-4xl btn btn-secondary ${currentIndex==0 && 'disabled'}`} 
                            onClick={handlePrevClick}
                        />
                    }
                </div>
                <div 
                    className='img-carrousel'
                    style={{
                        WebkitOverflowScrolling: 'touch',
                    }}
                    ref={imageContainerRef}
                    onScroll={ handleScroll }
                >
                    {
                        content.imgs.map(
                            (el, index) => (
                                <div 
                                    key={index} 
                                    className='img-div cursor-pointer'
                                    onClick={
                                        () => setToShowInOverlay(
                                            <Image 
                                                src={el.img}
                                                alt={`Image ${index + 1} full size`}
                                                height={800}
                                            />
                                        )
                                    }
                                >
                                    <Image
                                        src={el.img}
                                        alt={`Image ${index + 1}`}
                                        // placeholder={'blur'}
                                        height={size}
                                        style={{objectFit: "contain"}}
                                        onLoad={(e) => handleImageLoad(index, e)}
                                    />
                                </div>
                            )
                        )
                    }
                    
                </div>
                <div className='w-[40px] hidden md:block'>
                    {
                        isScrollable &&
                        <MdNavigateNext 
                            className={`text-4xl btn btn-secondary ${currentIndex==galleryLength-1 && 'disabled'}`} 
                            onClick={handleNextClick}
                        />
                    }
                </div>
            </div>
            <div 
                className='mx-auto md:hidden flex flex-row gap-2'
                // className='mx-auto flex flex-row gap-2'
            >
                {
                    Array.from({ length: galleryLength }, (_, index) => (
                        <div 
                            className={`circle ${(index === currentIndex) ? 'active' : ''}`}
                            key={index}
                        >
                        </div>
                    ))
                }
            </div>
        </div>
    </>);
    
}
