import React, { useState } from 'react';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import Dock from '../../Dock/components/Dock';
import { HomeContent } from '../../Home/components/Home';
import { AboutContent } from '../../About/components/About';
import { Foto } from '../../Avatar/components/Foto';
import { Autor } from '../../Autor/components/Autor';
import '../css/Toolbar.css';

export default function TemplateDemo() {
    const [activeContent, setActiveContent] = useState(null);

    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => setActiveContent('home')
        },
        {
            label: 'Sobre mim',
            icon: 'pi pi-star',
            command: () => setActiveContent('about')
        },
        {
            label: 'Projects',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'Core',
                    icon: 'pi pi-bolt',
                    shortcut: '⌘+S',
                    template: itemRenderer
                },
                {
                    label: 'Blocks',
                    icon: 'pi pi-server',
                    shortcut: '⌘+B',
                    template: itemRenderer
                },
                {
                    label: 'UI Kit',
                    icon: 'pi pi-pencil',
                    shortcut: '⌘+U',
                    template: itemRenderer
                },
                {
                    separator: true
                },
                {
                    label: 'Templates',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'Apollo',
                            icon: 'pi pi-palette',
                            template: itemRenderer
                        },
                        {
                            label: 'Ultima',
                            icon: 'pi pi-palette',
                            template: itemRenderer
                        }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="card">
            <Menubar model={items} start={Foto} end={Autor} />
            <Dock />
            {activeContent === 'home' && <HomeContent />}
            {activeContent === 'about' && <AboutContent />}
        </div>
    );
}
