const servicesData = [
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
        subtitle: 'Toutes les prestations sont réalisées sur la suite Adobe.',
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
    
    // {
    //     title: 'Audiovisuel et motion design',
    //     content: <>
    //         [WIP]
    //     </>
    // }
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