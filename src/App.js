import { useState } from 'react';
import dom from './json-dom/index.js';
import './App.css';

function App() {
    const [counter, setCounter] = useState(0);
    const json = [
        {
            e: 'div',
            p: {
                id: 'container'
            },
            c: [
                {
                    e: 'details',
                    c: [
                        {
                            e: 'summary',
                            c: ['Click here to expand'],
                        },
                        {
                            e: 'button',
                            p: {
                                onClick: () => setCounter(counter + 1)
                            },
                            c: [`You clicked: ${counter} times!`],
                        },
                        {
                            e: 'br',
                            selfClosing: true
                        },
                        {
                            e: 'p',
                            c: ['Lorem Ipsum'],
                        },
                    ],
                },
            ],
        },
    ];

    // json(dom) can also be used
    return dom(json);
};

export default App;