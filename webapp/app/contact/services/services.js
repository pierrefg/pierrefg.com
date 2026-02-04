const servicesData = [
    {
        title: 'Informatique',
        content: <>
            <ul>
                <li>science des données
                <ul>
                    <li>visualisation des données</li>
                    <li>vision par ordinnateur</li>
                    <li>traitement du signal</li>
                    <li>traitement du langage naturel</li>
                    <li>conception de models prédictifs</li>
                </ul>
                </li>
                <li>développement d'applications full-stack</li>
                <li>conception et developpement de sites web</li>
            </ul>
        </>
    },
    {
        title: 'Photographie',
        content: <>
            <ul>
                <li>couverture événementielle (soirées, concerts, mariages...)</li>
                <li>portraits</li>
                <li>photo-reportage</li>
            </ul>
        </>
    },
    {
        title: 'Graphisme',
        // subtitle: 'Toutes les prestations sont réalisées sur la suite Adobe.',
        content: <>
            <ul>
                <li>affiches, flyers, cartes de visite, stickers...</li>
                <li>création de graphiques associés à des données</li>
                <li>mise en page, typographie</li>
                <li>logos</li>
                <li>possibilité d'animation</li>
            </ul>
        </>
    },
]

export default function Services() {
    return (
        <div className="flex flex-col gap-8 max-w-4xl mx-auto" >
            {
                servicesData.map(
                    (item, index) => (
                        <div key={index} className="flex flex-col gap-4 w-full">
                            <div className="w-full text-left">
                                <h3>/ {item.title}</h3>
                            </div>
                            
                            <div className="pl-2 lg:pl-6">
                                {
                                    item.subtitle && <p>{item.subtitle}</p>
                                }
                                {item.content}
                            </div>
                        </div>
                    )
                )
            }
        </div>
    );
}