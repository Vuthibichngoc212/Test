import ReactDOM from 'react-dom';
import App from './App';
import Product from './product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
