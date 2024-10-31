import { createPageMetadata } from '@/utils/metadata';

import Rain from './rain/rain';

export const metadata = createPageMetadata(
    "Xperiences",
    "Expérimentations éclectiques.",
    "/xp"
)

export default function Xp() {
    return (
        <div className='h-screen w-full'>
            <Rain />
        </div>
    );
}
