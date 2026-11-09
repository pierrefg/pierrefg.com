"use client";

import './style.css';

import { useState } from 'react';

import TextInput from '@/components/form/TextInput';

import { GiEating } from "react-icons/gi";


export default function ShortLForm() {
    const [submitState, setSubmitState] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        setSubmitState('loading');
        setSubmitState('success');
        setSubmitState('error');
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl w-full flex flex-col gap-6 mx-auto"
        >
            <TextInput type='link' name='from_email' label='lien à manger' placeholder='https://...' disabled={!!submitState} />
            <div className="flex items-center justify-between">
                {
                    submitState === 'loading' ? (
                        <LoaderElement size={40} />
                    ) : submitState === 'success' ? (
                        <span className='text-green-500'>
                            <BiHappyBeaming className='inline' /> 
                            <> C'est parfait, je vous réponds au plus vite !</>
                        </span>
                    ) : submitState === 'error' ? (
                        <span className='text-red-600'>
                            <FaRegFaceSadCry className='inline' /> 
                            <> Il y a eu un problème avec l'envoi, essayez directement sur mon adresse pierrefg@proton.me !</>
                        </span>
                    ) : (
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            <GiEating className='inline' /> Manger
                        </button>
                    )
                }
            </div>
        </form>
    );
}