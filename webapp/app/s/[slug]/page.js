import { redirect } from 'next/navigation';

const LINKS = {
    github: 'https://github.com/pierrefg',
};

export default async function ShortLinkPage({ params }) {
    const { slug } = await params;

    const destination = LINKS[slug];

    if (!destination) {
        redirect('/');
    }

    redirect(destination);
}