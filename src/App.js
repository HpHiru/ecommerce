import logo from './logo.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Header'
import AddProduct from './AddProduct'
import UpdateProduct from './UpdateProduct'
import Login from './Login'
import Register from './Register'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
            <Route path="/add" element={<AddProduct />} />
            <Route path="/update" element={<UpdateProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;