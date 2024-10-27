import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Importa seu componente App
import CadastroUsuario from './CadastroUsuario'; // Importa o componente de cadastro
import BuscarUsuario from './BuscarUsuarios'; // Importa o componente de busca

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
