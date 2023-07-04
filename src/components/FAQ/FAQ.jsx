import React, { useState } from 'react';

const FAQ = () => {
    const [expanded, setExpanded] = useState(null);

    const questions = [
        {
            id: 1,
            question: '¿Cuál es el primer paso?',
            answer: 'El primer paso es...'
        },
        {
            id: 2,
            question: '¿Cómo puedo hacer esto?',
            answer: 'Puedes hacer esto...'
        },
        {
            id: 3,
            question: '¿Cuál es el primer paso?',
            answer: 'El primer paso es...'
        },
        {
            id: 4,
            question: '¿Cómo puedo hacer esto?',
            answer: 'Puedes hacer esto...'
        },
        {
            id: 5,
            question: '¿Cuál es el primer paso?',
            answer: 'El primer paso es...'
        }
    ];

    const toggleQuestion = (id) => {
        if (expanded === id) {
            setExpanded(null);
        } else {
            setExpanded(id);
        }
    };

    return (
        <div>
            <h3 className="text-center text-6xl text-white font-extrabold py-16">Preguntas frecuentes:</h3>
            <div className="flex justify-start flex-col px-32">
                {questions.map((item) => (
                    <div key={item.id} className="text-white text-xl py-2">
                        <button
                            className={`py-4 rounded-xl flex text-2xl items-center justify-between w-full py-2 px-4 ${expanded === item.id ? 'bg-blue-500 transition-all duration-500' : 'bg-gray-700 transition-all duration-200'
                                } text-left`}
                            onClick={() => toggleQuestion(item.id)}
                        >
                            <span className="font-medium">{item.question}</span>
                            <svg
                                className={`w-6 h-6 transition-all duration-500 transform ${expanded === item.id ? 'rotate-180' : 'rotate-0'
                                    }`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>
                        {expanded === item.id && (
                            <div className="py-2 px-4 bg-slate-900 text-lg">{item.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
