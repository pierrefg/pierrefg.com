import { graphicsData } from './content/data';

import Gallery from '@/components/gallery/Gallery';

import ImageCarrousel from '@/components/gallery/ImageCarrousel';

export default function Graphics() {
    return (
        <Gallery galleryContent = {graphicsData} GalleryObject={ImageCarrousel} />
    );
}
