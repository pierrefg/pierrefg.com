import PlaylistPlayer from "@/components/audioPlayer/PlaylistPlayer";

import { echoesFromTheGarden } from './content/echoes_from_the_garden';
import { perceptionData } from './content/perception';

export default function Music() {
    return (
        <div className="flex flex-col gap-6">
            <PlaylistPlayer playlist={echoesFromTheGarden} />
            <PlaylistPlayer playlist={perceptionData} />
        </div>
    );
}