import la_derniere_vague from '@/app/art/music/content/derniere_vague.jpg';
import echoes_from_the_garden from '@/app/art/music/content/echoes.jpg';

export const links = [
    {
        title: <>~ Nouveautées</>,
        id: 'actus',
        content: [
            {
                title: "Echoes from the Garden [EP]",
                link: "https://album.link/echoes_from_the_garden",
                extern: true,
                img: echoes_from_the_garden
            },
            {
                title: "La Dernière Vague [single]",
                link: "https://song.link/la_derniere_vague",
                extern: true,
                img: la_derniere_vague
            }
        ]
    },
    {
        title: <>~ Mes sites</>,  
        id: 'sites',
        content: [
            {
                title: "pierrefg.com",
                link: "https://www.pierrefg.com/",
            },
            {
                title: "p1ps.net",
                link: "https://p1ps.net/",
                extern: true
            }
        ]
    }
];