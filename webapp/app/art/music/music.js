import PlaylistPlayer from "@/components/audioPlayer/PlaylistPlayer";

import { x0aData } from './content/x0a';
import { perceptionData } from './content/perception';
import { violinData } from './content/violin';

export default function Music() {
    return (
        <div className="flex flex-col gap-6">
            <PlaylistPlayer playlist={x0aData} />
            <PlaylistPlayer playlist={perceptionData} />
            <PlaylistPlayer playlist={violinData} />
        </div>
    );
}