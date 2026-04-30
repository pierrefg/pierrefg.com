import PlaylistPlayer from "@/components/audioPlayer/PlaylistPlayer";

import { echoesFromTheGarden } from './content/echoes_from_the_garden';
import { perceptionData } from './content/perception';

export default function Music() {
    return (
        <div className="flex flex-col gap-6">
            <p className="text-center max-w-sm mx-auto py-5">
                Voici 2 de mes projets, quelque chose de plus gros se prépare en secret, et peut-être pas tout seul {">.<"} 
            </p>
            <PlaylistPlayer playlist={echoesFromTheGarden} />
            <PlaylistPlayer playlist={perceptionData} />
        </div>
    );
}