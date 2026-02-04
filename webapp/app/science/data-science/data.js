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
            Projet de maintenance prédictive mené avec la Compagnie Nationale du Rhône.
            J’ai développé une méthode automatisée pour surveiller l’entrefer rotor–stator
            à partir de capteurs capacitifs tournants, dans un contexte de déformation du stator
            et d’excentricité dynamique du rotor.
            <br />
            La solution fournit des résultats rapides et interprétables par des experts,
            tout en réduisant le volume de données à stocker.
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
            Conception d'un système d’analyse automatique de documents PDF complexes
            (études d’impact environnemental), combinant OCR et réseaux convolutionnels
            pour extraire la structure du document (titres, paragraphes, tableaux, figures).
            <br />
            J’ai ensuite développé un système de RAG permettant l’interrogation efficace
            de documents volumineux à partir de requêtes en langage naturel.
        </>
    },
    {
        id: 'saos',
        icon: RiHealthBookLine,
        title: "Détection automatique des phases d’éveil/sommeil en pédiatrie à partir d’enregistrements audio",
        subtitle: "traitement du signal, classification",
        period: "2024 (3 mois)",
        img: saosPic,
        imgLegend: "Spectrogramme de MEL avec annotations médicales.",
        summary: <>
            Projet de recherche visant à détecter automatiquement les phases d’éveil et de sommeil
            chez l’enfant à partir d’enregistrements audio de polygraphie respiratoire.
            <br />
            J’ai entraîné des modèles conçus pour l'audio sur plus de 8000 heures d’audio,
            atteignant des performances comparables à l’état de l’art, et un fort potentiel de réduction des délais d’examen.
        </>
    },
    {
        id: 'step',
        icon: TbBuildingFactory2,
        title: "Analyse automatique de pièces d'usinage 3D",
        subtitle: "analyse d'image, classification, clustering",
        period: "2024 (2 mois)",
        img: tsnePic,
        imgLegend: "Projection TSNE des embeddings de pièces 3D.",
        summary: <>
            Développement d'une méthode d’analyse de pièces d’usinage 3D au format <i>.step</i>,
            basée sur des représentations vectorielles latentes.
            <br />
            Cette approche permet le regroupement automatique de pièces similaires
            ainsi que leur classification (vis, boulons, écrous).
        </>
    },
    {
        id: 'hal',
        icon: SiGooglebigquery,
        title: "Recherche avancée de profils scientifiques",
        subtitle: "traitement automatique du langage naturel, scrapping",
        period: "2024 (3 mois)",
        img: halPic,
        imgLegend: "Résultat d'une requête sur l'outil développé.",
        summary: <>
            Développement d'un moteur de recherche de profils scientifiques
            à partir de l’archive ouverte HAL (plus de 1,5 million d’articles).
            <br />
            L’outil repose sur des embeddings multilingues par auteur
            et permet la recherche en langage naturel, l’évaluation de la pertinence
            des publications et l’assistance à la lecture.
        </>
    }
];
