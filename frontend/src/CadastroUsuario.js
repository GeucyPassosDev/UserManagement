import React, { useState } from 'react';
import axios from 'axios';
import './CadastroUsuario.css';

const CadastroUsuario = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        birthdate: '',
        status: 'ativo' // Mudamos para 'ativo'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Converte a data para o formato correto antes de enviar
        const formDataToSend = {
        ...formData,
        birthdate: new Date(formData.birthdate).toISOString().split("T")[0] // Configura a data para 'YYYY-MM-DD'
        };
        
        // Enviar dados para a API
        axios.post('http://localhost:3000/users', formData, {
            headers: {
                'Content-Type': 'application/json' // Definindo o cabeçalho
            }
        })
            .then(() => {
                alert('Usuário cadastrado com sucesso!');
                setFormData({
                    name: '',
                    email: '',
                    birthdate: '',
                    status: 'ativo' // Resetando para 'ativo'
                });
            })
            .catch(error => {
                console.error('Erro ao cadastrar usuário:', error);
                alert('Erro ao cadastrar o usuário: ' + (error.response?.data?.message || ''));
            });
    };

    return (
        <div className="form-container">
            <h2>Cadastrar Novo Usuário</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="birthdate">Data de Nascimento:</label>
                <input
                    type="date"
                    name="birthdate"
                    id="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="status">Status:</label>
                <select name="status" id="status" value={formData.status} onChange={handleChange}>
                    <option value="ativo">Ativo</option> {/* Muda para 'ativo' */}
                    <option value="inativo">Inativo</option> {/* Muda para 'inativo' */}
                </select>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroUsuario;
