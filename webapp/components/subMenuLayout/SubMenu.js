'use client';

import './style.css';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import SimpleLink from '../SimpleLink';

export default function SubMenu({ pagesData }) {
    const pathname = usePathname();
    const [hash, setHash] = useState('');

    // HANDLING HASH UPDATE BASED ON SCROLL POSITION
    useEffect(() => {
        const handleScroll = () => {
            let sections = document.querySelectorAll('.page-section');
            let scrollPosition = window.scrollY + window.innerHeight / 3;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                // Regular case for all sections except the last one
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const sectionId = section.getAttribute('id');
                    if (sectionId && `#${sectionId}` !== window.location.hash) {
                        setHash(`#${sectionId}`);
                        history.pushState(null, null, `${pathname}#${sectionId}`);
                    }
                }

                // Special case for the last section when reaching full scroll
                if (
                    window.innerHeight + window.scrollY >= document.body.offsetHeight && 
                    index === sections.length - 1
                ) {
                    const lastSectionId = section.getAttribute('id');
                    if (lastSectionId && `#${lastSectionId}` !== window.location.hash) {
                        setHash(`#${lastSectionId}`);
                        history.pushState(null, null, `${pathname}#${lastSectionId}`);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    // HANDLING SCROLLING AND STICKING
    useEffect(() => {
        const subMenu = document.querySelector('.sub-menu-layout');
        const computedStyle = getComputedStyle(subMenu);
        
        let topValue = computedStyle.getPropertyValue('top');
        topValue = parseInt(topValue, 10);
    
        // Capture the original offsetTop before the sticky class is applied
        const originalOffsetTop = subMenu.offsetTop;
    
        const handleStickyMenu = () => {
            // Use the original offsetTop for all calculations
            if (window.scrollY + topValue > originalOffsetTop) {
                subMenu.classList.add('sticky');
                subMenu.style.top = `${topValue}px`;  // Maintain the top offset for sticky position
            } else {
                subMenu.classList.remove('sticky');
                subMenu.style.top = '';  // Reset top to the original CSS
            }
        };
    
        window.addEventListener('scroll', handleStickyMenu);
    
        return () => {
            window.removeEventListener('scroll', handleStickyMenu);
        };
    }, []);

    return (
        <div className="sub-menu-container">
            <div className="sub-menu-layout">
                <div className="sub-menu">
                    {pagesData.map((el, index) => {
                        const isActive = pathname+hash === el.link;
                        return (
                            <SimpleLink 
                                key={index}
                                linkKey={index} 
                                content={el}  
                                active={isActive}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
