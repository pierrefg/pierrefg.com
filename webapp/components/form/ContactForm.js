"use client";

import './style.css';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import LoaderElement from '@/components/loader/LoaderElement';

import { FaRegFaceSadCry } from "react-icons/fa6";
import { BiHappyBeaming } from "react-icons/bi";
import { GrSend } from "react-icons/gr";

import TextInput from '@/components/form/TextInput';

export default function ContactForm() {
    const [mailState, setMailState] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        setMailState('loading');
        emailjs.send(
            'service_cdqzmu1',
            'pierrefg-contact',
            Object.fromEntries(formData.entries()),
            '1kQQT6t2xy65Q3xp4'
        )
            .then((response) => {
                setMailState('success');
            })
            .catch((err) => {
                setMailState('error');
            });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl w-full flex flex-col gap-6 mx-auto"
        >
            <TextInput label='Nom' name='from_name' placeholder='Votre nom' disabled={!!mailState} />
            <TextInput type='E-mail' name='from_email' label='Email' placeholder='Votre email' disabled={!!mailState} />
            <TextInput type='textarea' name='message' label='Message' placeholder='Contenu du message' rows="5" disabled={!!mailState} />
            <div className="flex items-center justify-between">
                {
                    mailState === 'loading' ? (
                        <LoaderElement size={40} />
                    ) : mailState === 'success' ? (
                        <span className='text-green-500'>
                            <BiHappyBeaming className='inline' /> 
                            <> C'est parfait, je vous réponds au plus vite !</>
                        </span>
                    ) : mailState === 'error' ? (
                        <span className='text-red-600'>
                            <FaRegFaceSadCry className='inline' /> 
                            <> Il y a eu un problème avec l'envoi, essayez directement sur mon adresse pierrefg@proton.me !</>
                        </span>
                    ) : (
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            <GrSend className='inline' /> Envoyer
                        </button>
                    )
                }
            </div>
        </form>
    );
}
