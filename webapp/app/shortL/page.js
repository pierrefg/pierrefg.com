import './style.css';

import ShortLForm from './ShortLForm';
import ShortLList from './ShortLList';
import { createPageMetadata } from '@/utils/metadata';

import Tabs from '@/components/tabs/Tabs';

export const metadata = createPageMetadata(
    'Mangeur de liens',
    'Réduis ton petit lien !',
    '/shortL'
);

export default function ShortL() {
    return (
        <div className="shortL-page flex flex-col items-center justify-center flex-1">
            <Tabs
                tabs={[
                    { id: 'eater', title: 'Manger un lien', content: <ShortLForm /> },
                    { id: 'list', title: 'Liens actifs', content: <ShortLList /> },
                ]}
                defaultTab="eater"
            />
        </div>
    );
}