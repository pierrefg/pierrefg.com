import { graphicsData } from './content/data';

import Gallery from '@/components/gallery/Gallery';

import ImageGrid from '@/components/gallery/ImageGrid';

export default function Graphics() {
    return (
        <Gallery galleryContent = {graphicsData} GalleryObject={ImageGrid} />
    );
}
