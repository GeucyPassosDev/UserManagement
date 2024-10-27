import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; 
import CadastroUsuario from './CadastroUsuario'; 
import BuscarUsuario from './BuscarUsuarios'; 

const MainRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/cadastrar" element={<CadastroUsuario />} />
                <Route path="/buscar" element={<BuscarUsuario />} />
            </Routes>
        </Router>
    );
};

export default MainRouter;
