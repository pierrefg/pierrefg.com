const servicesData = [
    {
        title: 'Graphisme',
        subtitle: 'Toutes les prestations sont réalisée sur la suite Adobe.',
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
    {
        title: 'Photographie',
        content: <>
            <ul>
                <li>couverture événementielle</li>
                <li>portraits</li>
                <li>photo-reportage</li>
            </ul>
        </>
    },
    {
        title: 'Audiovisuel et motion design',
        content: <>
            [WIP]
        </>
    }
]

export default function Services() {
    return (
        <div className="flex flex-col gap-8 max-w-2xl mx-auto" >
            {
                servicesData.map(
                    (item, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h3>/// {item.title}</h3>
                            <div>
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