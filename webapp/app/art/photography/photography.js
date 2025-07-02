import { photoData } from './content/data';

import Gallery from '@/components/gallery/Gallery';

import ImageGrid from '@/components/gallery/ImageGrid';

export default function Photography() {
    return (
        <Gallery galleryContent = {photoData} GalleryObject={ImageGrid} />
    );
}
