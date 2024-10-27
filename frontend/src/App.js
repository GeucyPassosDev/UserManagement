import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const navigate = useNavigate();

    const handleNavigate = (path) => {
      navigate(path);
    };

    return (
        <div className="home-container">
            <h1 className="title">Sistema de Gerenciamento de Usuários</h1>
            <div className="options-container">
                <button className="option-button" onClick={() => handleNavigate('/cadastrar')}>
                    Cadastrar Novo Usuário
                </button>
                <button className="option-button" onClick={() => handleNavigate('/buscar')}>
                    Buscar Usuário Cadastrados
                </button>
            </div>
        </div>
    );
};

export default App;
