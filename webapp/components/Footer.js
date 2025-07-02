import Link from 'next/link';

import { AiOutlineCopyright } from "react-icons/ai";

export default function Footer() {
    return (
        <div className="flex flex-col gap-0 w-full items-center py-6 text-small md:text-base max-w-7xl mx-auto text-primary-muted">
            <div className='text-center'>
                <Link 
                    href="/legals"
                >
                    Mentions légales
                </Link>
                <span className='hidden md:inline'> | </span>
                <span className='block md:hidden'></span>
                <Link 
                    href="/privacy"
                >
                    Politique de confidentialité
                </Link>
            </div>
            <div >
                <AiOutlineCopyright className='inline'/> Pierre Faure--Giovagnoli, 2025
            </div>
        </div>
    );
}