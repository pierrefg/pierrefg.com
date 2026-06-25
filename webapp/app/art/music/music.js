import PlaylistPlayer from "@/components/audioPlayer/PlaylistPlayer";

import { laDerniereVague } from "./content/derniere_vague";
import { echoesFromTheGarden } from './content/echoes_from_the_garden';
import { perceptionData } from './content/perception';
import { pseudoZak } from './content/pseudo_zak';

export default function Music() {
    return (
        <div className="flex flex-col gap-6">
            <p className="text-center max-w-sm mx-auto py-5">
                Quelques-un de mes projets persos, quelque chose de plus gros se prépare en secret, et peut-être pas tout seul {">.<"} 
            </p>
            <PlaylistPlayer playlist={echoesFromTheGarden} />
            <PlaylistPlayer playlist={laDerniereVague} />
            <PlaylistPlayer playlist={pseudoZak} />
            <PlaylistPlayer playlist={perceptionData} />
        </div>
    );
}