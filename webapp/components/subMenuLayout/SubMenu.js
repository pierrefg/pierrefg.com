'use client';

import './style.css';
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import SimpleLink from '../SimpleLink';

export default function SubMenu({ pagesData }) {
    const pathname = usePathname();
    const [hash, setHash] = useState('');

    // refs for horizontal auto-scroll
    const menuRef = useRef(null);
    const itemRefs = useRef([]);

    // HANDLING HASH UPDATE BASED ON SCROLL POSITION
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.page-section');
            const scrollPosition = window.scrollY + window.innerHeight / 3;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                // Regular case
                if (
                    scrollPosition >= sectionTop &&
                    scrollPosition < sectionTop + sectionHeight
                ) {
                    const sectionId = section.getAttribute('id');
                    if (sectionId && `#${sectionId}` !== window.location.hash) {
                        setHash(`#${sectionId}`);
                        history.pushState(null, null, `${pathname}#${sectionId}`);
                    }
                }

                // Last section special case
                if (
                    window.innerHeight + window.scrollY >=
                        document.body.offsetHeight &&
                    index === sections.length - 1
                ) {
                    const lastSectionId = section.getAttribute('id');
                    if (
                        lastSectionId &&
                        `#${lastSectionId}` !== window.location.hash
                    ) {
                        setHash(`#${lastSectionId}`);
                        history.pushState(
                            null,
                            null,
                            `${pathname}#${lastSectionId}`
                        );
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    // HANDLING STICKY MENU
    useEffect(() => {
        const subMenu = document.querySelector('.sub-menu-layout');
        if (!subMenu) return;

        const computedStyle = getComputedStyle(subMenu);
        let topValue = parseInt(
            computedStyle.getPropertyValue('top'),
            10
        );

        const originalOffsetTop = subMenu.offsetTop;

        const handleStickyMenu = () => {
            if (window.scrollY + topValue > originalOffsetTop) {
                subMenu.classList.add('sticky');
                subMenu.style.top = `${topValue}px`;
            } else {
                subMenu.classList.remove('sticky');
                subMenu.style.top = '';
            }
        };

        window.addEventListener('scroll', handleStickyMenu);
        return () =>
            window.removeEventListener('scroll', handleStickyMenu);
    }, []);

    // AUTO-SCROLL TO ACTIVE ITEM
    useEffect(() => {
        const activeIndex = pagesData.findIndex(
            (el) => pathname + hash === el.link
        );

        const activeItem = itemRefs.current[activeIndex];

        if (activeItem && menuRef.current) {
            activeItem.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    }, [hash, pathname, pagesData]);

    return (
        <div className="sub-menu-container">
            <div className="sub-menu-layout">
                <div className="sub-menu" ref={menuRef}>
                    {pagesData.map((el, index) => {
                        const isActive =
                            pathname + hash === el.link;

                        return (
                            <div
                                key={index}
                                ref={(node) =>
                                    (itemRefs.current[index] = node)
                                }
                            >
                                <SimpleLink
                                    linkKey={index}
                                    content={el}
                                    active={isActive}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
