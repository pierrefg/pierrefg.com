import { graphicsData } from './content/data';

import Gallery from '@/components/gallery/Gallery';

export default function Graphics() {
    return (
        <div className="flex flex-col w-full">
            {
                graphicsData.map(
                    (graphicsSection, index) => (
                        <div key={index} className='pb-8'>
                            <Gallery galleryData={graphicsSection} />
                        </div>                        
                    )
                )
            }
        </div>
    );
}
