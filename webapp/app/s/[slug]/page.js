import { redirect } from 'next/navigation';

const LINKS = {
    github: 'https://github.com/pierrefg',
};

export default async function ShortLinkPage({ params }) {
    const { slug } = await params;

    const destination = LINKS[slug];

    if (!destination) {
    // Option 1 : 404
    // notFound();

    // Option 2 : renvoyer vers l’accueil
    redirect('/');
    }

    redirect(destination);
}