import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

function App() {
    return (
        <div className="App" >
            <BrowserRouter>
            <Header />
            </BrowserRouter>
        </div>
    );
}

export default App;