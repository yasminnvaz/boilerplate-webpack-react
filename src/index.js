import React from "react";
import { render } from "react-dom";
import logo from './assets/logo.svg';
import "./index.css";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello, React!</p>
            </header>
        </div>
    )
}

render(<App />, document.getElementById("root"));