"use client";

import { usePathname } from 'next/navigation';

import { mainMenuLinks } from './menuData';

import SimpleLink from '../SimpleLink';

export default function MenuButtons({ toDoOnElementClick }) {
    const pathname = usePathname();
    
    return (
        <div className={`flex flex-col lg:flex-row items-center lg:gap-4 gap-3`}>
            {
                mainMenuLinks.map(
                    (el, index) => {
                        const isActive = pathname.includes(el.link);
                        
                        return (
                            <SimpleLink 
                                key={index}
                                linkKey={index} 
                                content={el} 
                                primary 
                                large 
                                active={isActive}
                                onClick={toDoOnElementClick}
                            />
                        )
                    }
                )
            }
        </div>
    )
}