import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importe os ícones que você deseja usar
import './BuscarUsuarios.css';

const BuscarUsuario = () => {
    const [users, setUsers] = useState([]);

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

    const handleEdit = (userId) => {
        // Lógica para edição do usuário
        console.log(`Editando usuário com ID: ${userId}`);
        // Você pode redirecionar para uma página de edição ou abrir um modal aqui
    };

    const handleDelete = (userId) => {
        axios.delete(`http://localhost:3000/users/${userId}`)
            .then(() => {
                // Remover o usuário da lista após a exclusão
                setUsers(users.filter(user => user.id !== userId));
            })
            .catch(error => {
                console.error('Erro ao excluir usuário:', error);
            });
    };

    return (
        <div className="search-container">
            <h2>Usuários Cadastrados</h2>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Data Nascimento</th>
                        <th>Status</th>
                        <th>Ações</th> {/* Coluna para ações */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.birthdate).toLocaleDateString('pt-BR')}</td>
                            <td>{user.status}</td>
                            <td>
                                <FaEdit 
                                    onClick={() => handleEdit(user.id)} 
                                    style={{ cursor: 'pointer', marginRight: '10px' }} 
                                />
                                <FaTrash 
                                    onClick={() => handleDelete(user.id)} 
                                    style={{ cursor: 'pointer', color: 'red' }} 
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BuscarUsuario;
