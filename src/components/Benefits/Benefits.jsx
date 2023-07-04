import React, { useState } from 'react';

const Benefits = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    const renderTabs = () => {
        const tabs = [
            { id: 1, label: 'Busco estacionamiento' },
            { id: 2, label: 'Tengo un garage' },
        ];

        return tabs.map((tab) => (
            <button
                key={tab.id}
                className={`px-8 py-4 mr-4 text-xl rounded-full ${activeTab === tab.id ? 'bold bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                    } transform hover:scale-105`}
                onClick={() => handleTabClick(tab.id)}
            >
                {tab.label}
            </button>


        ));
    };

    const renderCards = () => {
        const cardData = {
            tab1: [
                { id: 1, title: 'Más eficiencia 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar orci quis lacus iaculis volutpat. Sed posuere laoreet lorem ornare elementum. Suspendisse a erat libero.' },
                { id: 2, title: 'Más eficiencia', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar orci quis lacus iaculis volutpat. Sed posuere laoreet lorem ornare elementum. Suspendisse a erat libero.' },
                { id: 3, title: 'Más eficiencia', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar orci quis lacus iaculis volutpat. Sed posuere laoreet lorem ornare elementum. Suspendisse a erat libero.' },
            ],
            tab2: [
                { id: 4, title: 'Más eficiencia 2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar orci quis lacus iaculis volutpat. Sed posuere laoreet lorem ornare elementum. Suspendisse a erat libero.' },
                { id: 5, title: 'Más eficiencia', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar orci quis lacus iaculis volutpat. Sed posuere laoreet lorem ornare elementum. Suspendisse a erat libero.' },
                { id: 6, title: 'Más eficiencia', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar orci quis lacus iaculis volutpat. Sed posuere laoreet lorem ornare elementum. Suspendisse a erat libero.' },
            ],
        };

        const cards = activeTab === 1 ? cardData.tab1 : cardData.tab2;

        return cards.map((card) => (
            <div key={card.id}>
                <a href="#" class="block max-w-sm p-6 bg-gray-900 text-white border border-blue-500 rounded-xl shadow hover:bg-blue-500 bg-gray-900 hover:border-transparent transform hover:scale-105">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white">{card.title}</h5>
                    <p class="font-normal text-gray-700 text-white">{card.content}</p>
                </a>
            </div>
        ));
    };

    return (
        <div className='pt-8 pb-16 bg-slate-900 '>
            <h3 className='text-center text-6xl text-white font-extrabold py-16'>Beneficios</h3>
            <div className="flex justify-center mb-4 py-4">{renderTabs()}</div>
            <div className='flex justify-center'>
                <div className="grid grid-cols-3 gap-8">{renderCards()}</div>
            </div>
        </div>
    );
};

export default Benefits;
