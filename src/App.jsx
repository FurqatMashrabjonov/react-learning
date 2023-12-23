import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import Another from "./Another";
function App() {


    const [count, setState] = useState(0)

    const increment = () => {
        setState(count + 1)
    }

    const decrement = () => {
        setState(Math.max(0, count - 1))
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <h1>{count}</h1>
                    <button onClick={increment}>+</button>
                    <button onClick={decrement}>-</button>
                </p>
                <Another name="Furqat"/>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
