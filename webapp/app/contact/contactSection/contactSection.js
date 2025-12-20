import Link from "next/link";

import coverPic from './cover.jpg';
import ContactForm from '@/components/form/ContactForm';
import SideImageLayout from "@/components/sideImageLayout";

import { LuPartyPopper } from "react-icons/lu";

export default function ContactSection() {
    return (
        <ContactForm />
        // <SideImageLayout
        //     coverPic={coverPic}
        // >
        //     <ContactForm />
        // </SideImageLayout>
    );
}