import diatomPic from './imgs/diatom.jpg';
import cePic from './imgs/ce_graph.jpg';

import { IoHammerOutline } from "react-icons/io5";
import { MdOutlineWater } from "react-icons/md";

export const researchData = 
    [
        {
            id: 'thesis',
            icon: IoHammerOutline,
            type: 'Thèse',
            title: 'Connaissances du Domaine et Fonctions en Science des Données',
            subtitle: "Application à la Production d'Hydroélectricité",
            period: "2020-23",
            links: [
                {
                    text: 'manuscrit',
                    url: 'https://theses.hal.science/tel-04519659'
                },
                {
                    text: 'poster',
                    url: 'https://of5ylsz4mar7xvsj.public.blob.vercel-storage.com/pdfs/g3_poster-lmrpbAqiSwbCCtiV4viVW0EMS4pcy6.pdf'
                },
                {  
                    text: 'slides',
                    url: 'https://of5ylsz4mar7xvsj.public.blob.vercel-storage.com/pdfs/g3_slides-Xkh3jIKwU0t54DFdoM0y1jjjg043o6.pdf'
                },
                {
                    text: 'ADESIT',
                    url: 'https://adesit.liris.cnrs.fr/'
                },
            ],
            peopleIntro: 'Thèse défendue à Lyon le 24 novembre 2023 devant un jury composé de :',
            people: [
                {
                    role: 'Directeurs',
                    list: [
                        {
                            name: "Vasile-Marian",
                            surname: "Scuturici"
                        },
                        {
                            name: "Jean-Marc",
                            surname: "Petit"
                        }
                    ]
                },
                {
                    role: 'Rapporteur.euses',
                    list: [
                        {
                            name: "Amer-Yahia",
                            surname: "Sihem"
                        },
                        {
                            name: "Themis",
                            surname: "Palpanas"
                        }
                    ]
                },
                {
                    role: 'Examinateur.rices',
                    list: [
                        {
                            name: "Marius",
                            surname: "Bozga"
                        },
                        {
                            name: "Frédérique",
                            surname: "Laforest"
                        },
                        {
                            name: "Pierre",
                            surname: "Senellart"
                        }
                    ]
                },
                {
                    role: 'Invité',
                    list: [
                        {
                            name: "Pierre",
                            surname: "Roumieu"
                        }
                    ]
                }
            ],
            img: cePic,
            imgLegend: "Scatter plot du graphe de contre-exemples d'un jeu de données issu d'une centrale hydro-électrique.",
            summary: <>
                Dans cette thèse, nous étudions le lien entre la connaissance métier sous la forme d'une fonction et la science des données. 
                Considérons le scénario suivant. Soit D(y,z1,...,zn) un ensemble de données, Alice une experte en science des données, Bob un expert du domaine et y=f(z1, ..., zn) une fonction connue de Bob grâce à ses connaissances métier. 
                Dans cette thèse, nous nous intéressons aux questions suivantes, simples mais cruciales pour Alice. 
                <i>
                Comment définir la satisfaction de f dans D ? 
                Comment mesurer efficacement cette satisfaction ? 
                Comment cette satisfaction est-elle liée à la tâche d'apprentissage supervisé consistant à apprendre f à partir de D ? 
                </i>
                Il s'avère que ces problèmes sont liés à l'étude des contre-exemples par l'utilisation des dépendances fonctionnelles (DF) et, en particulier, des mesures permettant de quantifier la satisfaction des DFs dans un ensemble de données telles que l'indicateur g3. 
                Plus précisément, nous considérons le cas où l'égalité est remplacée par des prédicats plus flexibles, une relaxation maintenant courante dans la littérature. 
                <br />
                Premièrement, nous examinons la complexité du calcul du g3. 
                Il est connu que g3 peut être calculé en temps polynomial lorsqu'on utilise l'égalité, alors qu'il devient NP-difficile lorsqu'on utilise des prédicats généraux. 
                Nous proposons d'affiner cette dichotomie en étudiant l'impact des propriétés communes suivantes : réflexivité, transitivité, symétrie et antisymétrie. 
                Nous montrons que la symétrie et la transitivité sont suffisantes pour garantir que l'erreur g3 puisse être calculée en temps polynomial. 
                Cependant, la suppression de l'une d'entre elles rend le problème difficile. 
                <br />
                Deuxièmement, nous étudions le calcul de g3 dans les cas polynomial et NP-difficile identifiés dans la première partie. 
                Nous proposons différentes solutions exactes et approximées pour le calcul de g3 dans les deux cas. 
                Nous comparons ces solutions dans une étude expérimentale détaillée des performances temporelles et d'approximation. 
                Tous les algorithmes sont également disponibles via fastg3, une librairie Python open-source implémentée en C++. 
                <br />
                Troisièmement, nous connectons l'étude des contre-exemples et l'indicateur g3 à l'apprentissage supervisé à l'aide d'une application web appelée ADESIT. 
                ADESIT est destinée à faire partie d'un processus itératif de raffinement des données juste après la sélection des données et juste avant le processus d'apprentissage lui-même. 
                Elle permet d'évaluer la capacité d'un ensemble de données à donner de bons résultats pour un problème d'apprentissage supervisé par le biais de statistiques et d'une exploration visuelle. 
                <br/>
                Enfin, nous validons notre approche par une application au problème industriel de la surveillance de l'entrefer dans les générateurs hydrauliques compacts et développons une solution pour le traitement automatique des données enregistrées.
            </>
        },
        {
            id: 'mthesis',
            icon: MdOutlineWater,
            type: 'Thèse de master',
            title: "Apprentissage Profond pour la Détection et l'Identification Automatique de Diatomées",
            subtitle:  "pour le Diagnostic Écologique des Milieux d'Eau Douce",
            period: "2020 (6 mois)",
            links: [
                {
                    text: 'manuscrit',
                    url: 'https://repository.gatech.edu/entities/publication/8b1d7e14-99ea-4e31-83c1-a261e88a77ec'
                },
                {
                    text: 'poster',
                    url: 'https://of5ylsz4mar7xvsj.public.blob.vercel-storage.com/pdfs/diatoms_poster-O3MpzVoAgmQkjrYcLvaGLsLRs1rzsv.pdf'
                }
            ],
            peopleIntro: 'Thèse de master approuvée le 24 juillet 2020 par :',
            people: [
                {
                    role: 'Directeur',
                    list: [
                        {
                            name: "Cédric",
                            surname: "Pradalier "
                        }
                    ]
                },
                {
                    role: 'Jury',
                    list: [
                        {
                            name: "Ghassan",
                            surname: "AlRegib"
                        },
                        {
                            name: "Joseph",
                            surname: "Montoya"
                        }
                    ]
                }
            ],
            img: diatomPic,
            imgLegend: "Exemple d'image de microscope synthétique générée dans cette étude.",
            summary: <>
                Les diatomées sont un type de microalgues unicellulaires présent dans tous les environnements aquatiques. 
                Leur grande diversité et ubiquité font de ces organismes des bio-indicateurs reconnus pour surveiller l'état écologique des cours d'eau, notamment dans le cadre de la mise en œuvre de la Directive-Cadre sur l'Eau en Europe. 
                Dans ce contexte, nous proposons une étude sur la détection des diatomées sur des images microscopiques en utilisant une architecture de détection d'objets basée sur l'apprentissage profond. 
                <br/>
                Afin de réduire le nombre d'images annotées manuellement nécessaires à l'entraînement, nous utilisons un ensemble de données synthétiques en parallèle avec un ensemble de données réelles, ce qui permet de gagner plus de 10 % de précision et 5 % de rappel. 
                Cet ensemble de données synthétiques représente un gain de temps significatif, d'autant plus qu'il est constitué d'images disponibles publiquement fournies par des atlas de diatomées, évitant ainsi la tâche laborieuse d'acquisition d'images microscopiques. La détection des diatomées peut être utilisée pour de nombreuses tâches, notamment pour la classification ultérieure des vignettes extraites, soit manuellement, soit par apprentissage automatique. Pour illustrer cette utilisation, nous proposerons également une mise à jour sur la classification automatique des diatomées en utilisant les dernières avancées en matière de classification d'images. 
                Enfin, nous discuterons également des applications de la taxonomie artificielle dans le cas de la classification hiérarchique des diatomées.    
            </>
        },
    ]