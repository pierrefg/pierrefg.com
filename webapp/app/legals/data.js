import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export const legalData = [
    {
        title: 'Éditeur du site',
        content: <>
            Pierre Faure--Giovagnoli 
            <br />
            (nom commercial : Pierre FG)
            <br />
            SIRET : 932 466 386 00012
            <br />
            Code APE : 70.22Z
            <br />
            Forme juridique : Entrepreneur individuel
            <br />
            Immatriculé au RNE le : 18/10/2024
            <br />
            Siège social : Rhône (69)
            <br />
            <a
                href='mailto: contact@pierrefg.com'
                target="_blank"
                rel="noopener noreferrer"
            >
                <><AiOutlineMail className="inline" /> contact@pierrefg.com</>
            </a>
        </>
    },
    {
        title: 'Responsable de la publication',
        content: <>
            Pierre Faure--Giovagnoli
        </>
    },
    {
        title: 'Hébergement du site',
        content: <>
            Vercel Inc.
            <br />
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis
            <br />
            <AiOutlinePhone className="inline" /> +1-888-830-5844
        </>
    },
    {
        title: 'Contact',
        content: <>
            Pour toute question concernant ce site ou son contenu, vous pouvez nous contacter à l'adresse suivante :
            <a
                href='mailto: contact@pierrefg.com'
                target="_blank"
                rel="noopener noreferrer"
            >
                <> contact@pierrefg.com</>
            </a>
        </>
    },
    {
        title: 'Propriété intellectuelle',
        content: <>
            Le contenu de ce site (textes, images, vidéos, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle. 
            Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit, est interdite, sauf autorisation préalable écrite de l'éditeur.
        </>
    },
    {
        title: 'Liens hypertextes',
        content: <>
            Le site peut contenir des liens hypertextes vers d'autres sites. 
            L'éditeur ne saurait être tenu responsable du contenu de ces sites externes.    
        </>
    },
    {
        title: 'Données personnelles',
        content: <>
            Les seules données collectées via le formulaire de contact (nom, prénom, adresse e-mail) sont utilisées uniquement pour répondre aux demandes des visiteurs et ne sont pas transmises à des tiers.
        </>
    },
]
