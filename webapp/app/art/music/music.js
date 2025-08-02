import PlaylistPlayer from "@/components/audioPlayer/PlaylistPlayer";

import { miscTracksData } from './content/miscTracks';
import { perceptionData } from './content/perception';
import { violinData } from './content/violin';

export default function Music() {
    return (
        <div className="flex flex-col gap-6">
            <PlaylistPlayer playlist={miscTracksData} />
            <PlaylistPlayer playlist={perceptionData} />
            {/* <PlaylistPlayer playlist={violinData} /> */}
        </div>
    );
}