import { AiOutlineMail } from "react-icons/ai";
import { TbCookieOff } from "react-icons/tb";

export const privacyData = [
    {
        title: 'I. Collecte des Informations',
        content: <>
            Je collecte différents types d'informations lorsque vous visitez mon Site :
            <ul>
                <li>
                    Informations techniques : J'utilise Vercel Analytics et Vercel Speed Insights pour analyser les performances de mon site et comprendre comment les utilisateurs interagissent avec mes pages. 
                    Ces outils collectent automatiquement des informations telles que votre adresse IP (anonymisée), le type de navigateur, le système d'exploitation, les pages visitées, le temps passé sur chaque page, et d'autres statistiques d'usage.
                </li>
                <li>
                    <TbCookieOff className="inline text-2xl"/> Cookies : Ce site n'utilise PAS les cookies. ツ
                </li>
            </ul>
        </>
    },
    {
        title: 'II. Utilisation des Informations',
        content: <>
            Les informations que je collecte sont utilisées pour :
            <ul>
                <li>
                    Améliorer la performance et l'efficacité de mon Site.                                       
                </li>
                <li>
                    Analyser les tendances d'utilisation et les comportements des utilisateurs.                
                </li>
                <li>
                    Résoudre les problèmes techniques et optimiser l'expérience utilisateur.               
                </li>
            </ul>
        </>
    },
    {
        title: 'III. Partage des Informations',
        content: <>
            Je ne partage pas vos informations personnelles avec des tiers, sauf dans les cas suivants :
            <ul>
                <li>
                    Avec des fournisseurs de services tiers qui m'aident à exploiter mon Site, à mener mes activités, ou à vous servir, tant que ces parties acceptent de garder ces informations confidentielles.                                       
                </li>
                <li>
                    Lorsque la loi l'exige ou pour se conformer à des procédures légales.
                </li>
            </ul>
        </>
    },
    {
        title: 'IV. Protection des Informations',
        content: <>
            Je mets en place des mesures de sécurité pour protéger vos informations contre tout accès non autorisé, altération, divulgation ou destruction.
        </>
    },
    {
        title: 'V. Vos Droits',
        content: <>
            Vous avez le droit de :
            <ul>
                <li>
                    Accéder aux informations que je détiens à votre sujet. 
                </li>
                <li>
                    Demander la correction de toute information incorrecte ou incomplète.
                </li>
                <li>
                    Demander la suppression de vos informations personnelles, sous réserve de certaines exceptions légales.
                </li>
            </ul>
        </>
    },
    {
        title: 'VI. Modifications de cette Politique',
        content: <>
            Je me réserve le droit de mettre à jour cette politique de confidentialité à tout moment. 
            Toute modification sera affichée sur cette page, et la date de mise à jour sera modifiée en conséquence.
        </>
    },
    {
        title: 'VII. Me Contacter',
        content: <>
            Si vous avez des questions concernant cette politique de confidentialité ou si vous souhaitez exercer vos droits, veuillez me contacter à l'adresse suivante :
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
];