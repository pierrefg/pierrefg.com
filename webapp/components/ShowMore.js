'use client';

import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function ShowMore({ children, textShow = "Voir plus", textHide = "Voir moins", maxChars = 600 }) {
    const [show, setShow] = useState(false);
    

    const textContent = children
        .filter(item => typeof item === 'string')
        .join(' ');
    const truncatedText = textContent.slice(0, maxChars) + (textContent.length > maxChars ? '...' : '');

    const [needCollapsible, setNeedCollapsible] = useState(textContent.length > maxChars);

    const toggle = () => {
        setShow(!show);
    }

    return (
        <div>
            <div>
                {(show || !needCollapsible)  ? children : truncatedText}
            </div>
            {
                needCollapsible &&
                <button
                    className={`btn btn-secondary mt-2 ${show ? 'active' : ''}`}
                    onClick={toggle}
                >
                    {
                        show ?
                        <><AiOutlineEyeInvisible className='inline' /> {textHide}</> :
                        <><AiOutlineEye className='inline' /> {textShow}</>
                    }
                </button>
            }
        </div>
    );
}
