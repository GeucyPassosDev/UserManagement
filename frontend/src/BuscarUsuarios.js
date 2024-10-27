import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BuscarUsuarios.css';

const BuscarUsuario = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchedName, setSearchedName] = useState(''); // Estado para armazenar o nome buscado

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3000/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar usuários:', error);
            });
    };

    const handleSearch = () => {
        axios.get(`http://localhost:3000/users?name=${searchTerm.toLowerCase()}`)
            .then(response => {
                setUsers(response.data);
                setSearchedName(searchTerm); // Atualiza o nome buscado
            })
            .catch(error => {
                console.error('Erro ao buscar usuários:', error);
            });
    };

    return (
        <div className="search-container">
            <h2>Buscar Usuário</h2>
            <input
                type="text"
                placeholder="Buscar por nome"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Buscar</button>

            {/* Exibir o nome buscado, se existir */}
            {searchedName && <h3>Resultados para: {searchedName}</h3>}

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Data Nascimento</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.birthdate).toLocaleDateString('pt-BR')}</td> {/* Formatação da data */}
                            <td>{user.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BuscarUsuario;
