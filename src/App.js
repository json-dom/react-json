import { useState } from 'react';
import { json, dom, globals } from '@json-dom/react-json';
import './App.css';

globals();

function App() {
    const [counter, setCounter] = useState(0);
    const pageStructure = [
        {
            e: div,
            p: { id: 'container' },
            c: [
                {
                    e: details,
                    c: [
                        { e: summary, c: ['click to expand'] },
                        {
                            e: button,
                            p: { onClick: () => setCounter(counter + 1) },
                            c: [`You clicked: ${counter} times!`],
                        },
                        { e: br },
                        { e: p, c: [counter > 0 ? counter : 'Hello World!'] },
                    ],
                },
            ],
        },
    ];

    const render = dom(pageStructure);

    const renderedJson = json(render);

    const _render = dom(renderedJson);

    return _render;
}

export default App;