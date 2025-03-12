import { photoData } from './content/data';

import Gallery from '@/components/gallery/Gallery';

import ImageCarrousel from '@/components/gallery/ImageCarrousel';

export default function Photography() {
    return (
        <Gallery galleryContent = {photoData} GalleryObject={ImageCarrousel} />
    );
}
