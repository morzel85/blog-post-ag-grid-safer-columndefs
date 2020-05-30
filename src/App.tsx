import React from 'react';
import './App.css';

import StarsGrid from './grid/StarsGrid';

function App() {
    return (
        <div className="App">
            <StarsGrid />
            <div className="about">
                <div>
                    Example app for <a href="https://morzel.net">morzel.net</a> blog post
                </div>
                <div>
                    Data: <a href="https://en.wikipedia.org/wiki/List_of_brightest_stars">List of brightest stars</a>
                </div>
            </div>
        </div>
    );
}

export default App;
