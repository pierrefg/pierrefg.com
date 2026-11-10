'use client';

import { useState } from 'react';
import SimpleLink from '@/components/SimpleLink';

export default function Tabs({ tabs, defaultTab, rootLink }) {
    const [activeTabId, setActiveTabId] = useState(defaultTab ?? tabs[0]?.id);

    const activeTab = tabs.find((tab) => tab.id === activeTabId);

    return (
        <div className="flex flex-col gap-4 m-4 md:w-[600px] md:min-h-[300px]">
            <div className="flex flex-row gap-2">
                {tabs.map((tab) => (
                    <SimpleLink
                        key={tab.id}
                        content={{
                            title: tab.title,
                            link: rootLink,
                            anchor: tab.id,
                        }}
                        linkKey={tab.id}
                        active={activeTabId === tab.id}
                        onClick={() => setActiveTabId(tab.id)}
                    />
                ))}
            </div>

            <div className="bg-white flex w-full flex-1 items-center justify-center p-4 border-2 border-solid border-primary">
                {activeTab?.content}
            </div>
        </div>
    );
}