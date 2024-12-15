import { useState } from 'react';
import './App.css';
require('./json-dom/modules/globals/globals.js');

function App() {
    const [counter, setCounter] = useState(0);
    let _container, _content, _button;

    _container = { id: 'container' };
    _content = { id: 'title' };
    _button = { onClick: () => setCounter(counter + 1) };

    return Render(
        div(_container)[
        details(_content)[
        summary()[
        'click here to expand'
        ],
        button(_button)[
        `You clicked: ${counter} times!`
        ],
        br,
        'Lorem Ipsum'
        ]]
    );
};

export default App;
