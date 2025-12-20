import { IoDocumentTextOutline } from "react-icons/io5";
import { RiHealthBookLine } from "react-icons/ri";
import { SiGooglebigquery } from "react-icons/si";
import { TbBuildingFactory2 } from "react-icons/tb";
import { SlEnergy } from "react-icons/sl";

import pdfPic from './imgs/pdf_analysis.jpg';
import saosPic from './imgs/saos.jpg';
import tsnePic from './imgs/tsne.jpg';
import halPic from './imgs/hal_scrapping.jpg';
import airgapPic from './imgs/airgap.jpg';

export const dataScienceData = 
    [
        {
            id: 'airgap',
            icon: SlEnergy,
            title: "Surveillance de l'entrefer dans des turbines hydro-électriques compactes",
            subtitle: "traitement du signal, visualisation",
            period: "2023-2024 (1 an)",
            img: airgapPic,
            imgLegend: "Déplié 3D de la valeur d'entrefer dans une turbine hydroélectrique.",
            summary: <>
                La Compagnie Nationale du Rhône (CNR) exploite un grand nombre de centrales hydroélectriques le long de la rive française du Rhône.
                Suite à des collisions rotor-stator sur certaines de leurs turbines, la CNR a commencé à développer des techniques de maintenance prédictive en surveillant l'entrefer (distance entre le stator et le rotor).
                Il est utile de noter que c'est le stator qui subit une déformation mécanique progressive et non le rotor comme c'est plus souvent le cas dans ces machines.
                Par conséquent, l'entrefer doit être surveillé à partir du rotor à l'aide de capteurs tournants.
                Après plusieurs solutions, le CNR a finalement opté pour une solution basée sur des capteurs de déplacement capacitifs. 
                Cependant, l'exploitation de ces flux de données est actuellement fastidieuse, lente et la qualité des résultats est laissée à la discrétion de l'analyste.
                <br />
                La solution proposée dans ce projet permet de traiter automatiquement les données des capteurs d'entrefer dans le cas d'une déformation du stator avec une excentricité dynamique du rotor.
                L'objectif est de fournir des données qualitatives et interprétables en un temps raisonnable.
                En particulier, la qualité des résultats doit être facilement évaluée par les experts du domaine, sans avoir besoin de connaissances préalables sur les techniques employées.
                Notre proposition permet également de réduire la taille des données et donc de faciliter leur stockage.
                Nous utilisons une combinaison de techniques de science des données issues du traitement du signal, de la géométrie et de la visualisation.
            </>
        },
        {
            id: 'pdf_analysis',
            icon: IoDocumentTextOutline,
            title: 'Analyse automatique de mise en page PDF et système RAG',
            subtitle: "analyse d'image, traitement automatique du langage naturel",
            period: "2024 (4 mois)",
            img: pdfPic,
            imgLegend: "Exemple de pdf analysé par l'outil développé dans ce projet.",
            summary: <>
                Dans ce projet, nous avons mis en place un système de détection de mise en page pour des documents PDF complexes (études d'impact environnemental).
                Plusieurs outils issus de la littérature (OCR, réseaux convolutionnels) ont été assemblés afin d'extraire : paragraphes, titres, listes, tableaux, figures, etc.
                Les détections sont associées à un niveau de confiance, et le type de figure est également détecté.
                <br />
                Dans un second temps, nous avons développé un système de RAG (retrieval-augmented generation) pour permettre l'interrogation de très grands documents.
                Ce système regroupe plusieurs outils de traitement automatique du langage naturel, basés sur les avancées les plus récentes de la littérature.
            </>
        },
        {
            id: 'saos',
            icon: RiHealthBookLine,
            title: "Détection automatique des phases d’éveil/sommeil en pédiatrie à partir d’enregistrements audio",
            subtitle: "traitement du signal, classification",
            period: "2024 (3 mois)",
            img: saosPic,
            imgLegend: "Visualisation du spectrograme de MEL d'un enregistrement de sommeil avec labels médicaux sur le dessous.",
            summary: <>
                En France, les structures pédiatriques réalisant une polygraphe (PG) respiratoire du sommeil sont rares, impliquant un délai d’examen souvent déraisonnable avec une perte de chance pour l'enfant atteint de SAS. La présente étude ouvre la voie à une assistance à la lecture des enregistrements PG, dans l’objectif de réduire ces délais. Nous nous intéressons à la détection automatique des phases d’éveil / sommeil. Pour ce faire, nous choisissons d’exploiter le son (NOX®), qui est le signal le plus fiable chez l’enfant. La détection des phases d'éveil à partir d'enregistrements audio reste un défi technologique et a été très peu étudiée sur des cohortes pédiatriques.
                <br />
                La cohorte étudiée est constituée de 1388 enfants âgés de 1 an et demi à 17 ans, dont 62 % de garçons, avec un IMC moyen de 19,82. Les antécédents médicaux des participants sont variés. Les annotations éveil / sommeil proviennent d’une double lecture par des praticiens certifiés du sommeil. Après expérimentation, le modèle de machine learning retenu est XGBoost, reconnu pour sa robustesse et l'explicabilité de ses résultats. Pour l’entraînement, un échantillon aléatoire de 500 individus, représentant 8150 heures d’audio, a été utilisé. Le son a été découpé en époques standards et un ensemble d’attributs temporels et fréquentiels a été extrait.
                <br />
                Une fois le modèle entraîné dans les conditions décrites, il a été testé sur un autre échantillon aléatoire de 500 individus, atteignant une accuracy de 92.1%. Cette performance est au moins équivalente à celle rapportée dans la littérature sur les cohortes adultes plus petites et moins variées.
                <br />
                La détection automatique des phases d’éveil et de sommeil à partir d’enregistrements audio chez les enfants semble prometteuse. Nos résultats ouvrent la voie à une réduction significative des délais d’examen, facilitant la prise en charge des enfants atteints de SAS.
            </>
        },
        {
            id: 'step',
            icon: TbBuildingFactory2,
            title: "Analyse automatique de pièces d'usinage 3D",
            subtitle: "analyse d'image, classification, clustering",
            period: "2024 (2 mois)",
            img: tsnePic,
            imgLegend: "Visualisation TSNE des pièces 3D dans l'espace des embeddings. Les couleurs représentent les classes des pièces.",
            summary: <>
                Dans ce projet, nous avons analysé des pièces d'usinage 3D au format <i>.step</i>.
                Les pièces ont été converties dans un espace vectoriel latent permettant leur comparaison sur des critères visuel.
                Nous avons alors proposé un système permettant de réunir automatiquement des pièces aux caractéristiques similiaires grâce à plusieurs techniques de clustering complémentaires.
                <br />
                Dans un second temps, nous avons utilisé un jeu de données labellisé pour proposer un système de classification automatique des pièces (vis, boulons, écrous...).
            </>
        },
        {
            id: 'step',
            icon: SiGooglebigquery,
            title: "Recherche avancée de profils scientifiques",
            subtitle: "traitement automatique du langage naturel, scrapping",
            period: "2024 (3 mois)",
            img: halPic,
            imgLegend: "Exemple de résultat d'une requête à l'outil développé dans ce projet.",
            summary: <>
                Dans ce projet, nous avons développé une solution pour améliorer le processus de recrutement des profils scientifiques.
                En nous appuyant sur une base de données composée de plus de 1,5 million d'articles issus de l'archive ouverte HAL, nous avons construit une base consolidée d'environ 2 millions d'auteur.rices.
                <br />
                L'outil final permet d'effectuer des recherches à l'aide de requêtes en langage naturel.
                Il repose sur une agrégation d'embeddings multilingues par auteur et une recherche des plus proches voisins approximée.
                Ce système permet également d'évaluer la pertinence des publications individuelles et d'assister la lecture des articles en surlignant les sections les plus pertinentes par rapport à la requête.
                Enfin, un processus de mise à jour a été intégré pour la base de données, permettant d'ajouter de nouveaux articles et de maintenir l'indexation de recherche à jour de manière efficace.
            </>
        }
    ]