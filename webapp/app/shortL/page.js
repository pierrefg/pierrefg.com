import './style.css';

import ShortLForm from './ShortLForm';
import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Mangeur de liens",
    "Réduis ton petit lien !",
    "/shortL"
)

export default function ShortL() {
    return (
        <div className="flex flex-col items-center justify-center flex-1">
            <ShortLForm />
        </div>
    );
}