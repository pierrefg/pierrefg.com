import './style.css';

import EaterForm from './EaterForm';
import EaterList from './EaterList';
import { createPageMetadata } from '@/utils/metadata';

import Tabs from '@/components/tabs/Tabs';

export const metadata = createPageMetadata(
    'Mangeur de liens',
    'Réduis ton petit lien !',
    '/shortL'
);

export default function Eater() {
    return (
        <div className="trame-a flex flex-col items-center justify-center flex-1">
            <h1 className="bg-foreground" >Mangeur de liens</h1>
            <Tabs
                tabs={[
                    { id: 'digest', title: 'Manger un lien', content: <EaterForm /> },
                    { id: 'poop', title: 'Liens actifs', content: <EaterList /> },
                ]}
                defaultTab="digest"
                rootLink="/eater"
            />
        </div>
    );
}