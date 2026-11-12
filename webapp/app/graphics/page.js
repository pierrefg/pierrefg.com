import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Charte graphique",
    "Charte graphique du site pierrefg.com.",
    "/graphics"
)

export default function Footer() {
    return (
        <div className='w-full flex-1 flex flex-col gap-6 mx-2 items-center justify-center'>
            <h1><a href="https://github.com/pierrefg/pierrefg.com/raw/refs/heads/main/webapp/app/fonts/Neo-castel.ttf">Titres en Neo Castel</a></h1>
            <p><a href="https://github.com/pierrefg/pierrefg.com/raw/refs/heads/main/webapp/app/fonts/monaspace_argon_var.ttf">Corps en Mona Space Argon</a></p>

            <div className='text-frame'>
                <p>Voici un simple cadre de texte.</p>
            </div>

            <div>
                <ul>
                    <li>et...</li>
                    <li>une liste !
                        <ul>
                            <li>et</li>
                            <li>une</li>
                            <li>liste</li>
                            <li>imbriquée</li>
                        </ul>

                    </li>
                </ul>
            </div>    

            <div>
                <h2>Et les couleurs ?..</h2>
                <div className='flex flex-row gap-4 mt-2'>
                    <div className='bg-primary text-foreground p-4 '>Encre<br/>#5A005A</div>
                    <div className='bg-primary-hover text-foreground p-4'>Encre délavée<br/>#800080</div>
                    <div className='bg-foreground text-primary p-4 border-solid border-2'>Papier<br/>#FFFFFA</div>
                </div>
            </div>
        </div>
    )
}