'use client';

import './style.css';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import BackgroundImageLayout from '../BackgroundImageLayout';
import SubMenu from './SubMenu';

export default function SubMenuLayout({pageDescription, pagesData, noMenu=false }) {
    const pathname = usePathname();

    const [isFullWidth, setIsFullWidth] = useState(false);

    useEffect(() => {
        const currentPage = pagesData.find(contentData => pathname === contentData.link);
        if (currentPage) {
            setIsFullWidth(currentPage.fullWidth || false);
        }
    }, [pathname, pagesData]);    

    return (
        <>
            <BackgroundImageLayout
                coverPic={pageDescription.coverPic}
                title={pageDescription.title}
                icon={pageDescription.icon}
            >
                {pageDescription.description}
            </BackgroundImageLayout>

            {
                noMenu ?
                <div className='h-[20px]' />
                :
                <SubMenu pagesData={pagesData} />
            }
            
            <div className={`sub-menu-content ${!isFullWidth && 'max-w-7xl lg:px-0 px-4 mx-auto'}`}>
                <div className='flex flex-col gap-10 mt-4'>
                    {
                        pagesData.map(
                            (el, index) => (
                                <div key={index} id={el.id} className='page-section flex flex-col gap-8'>
                                    {
                                        !el.noTitle && 
                                        <div className="flex flex-col text-center items-center justify-center">
                                            <div>
                                                <h2>
                                                    {el.title}
                                                </h2>
                                                <div className='bg-primary-hover mt-2 w-[50px] h-[5px]' />
                                            </div>
                                        </div>
                                    }
                                    {el.section}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
}
