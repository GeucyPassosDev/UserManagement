import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
import moment from 'moment'; // Importar moment
import './BuscarUsuarios.css';

const BuscarUsuario = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        axios.get('http://localhost:3000/users')
            .then(response => setUsers(response.data))
            .catch(error => console.error('Erro ao buscar usuários:', error));
    };

    const handleEdit = (user) => setEditingUser(user);
    const handleDelete = (userId) => {
        axios.delete(`http://localhost:3000/users/${userId}`)
            .then(() => setUsers(users.filter(user => user.id !== userId)))
            .catch(error => console.error('Erro ao excluir usuário:', error));
    };

    const handleSaveEdit = () => {
        axios.put(`http://localhost:3000/users/${editingUser.id}`, editingUser)
            .then(() => {
                fetchUsers();
                setEditingUser(null);
            })
            .catch(error => console.error('Erro ao editar usuário:', error));
    };

    const handleChange = (e) => {
        setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
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
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{moment(user.birthdate).format('DD/MM/YYYY')}</td> {/* Modificado */}
                            <td>{user.status}</td>
                            <td>
                                <FaEdit onClick={() => handleEdit(user)} style={{ cursor: 'pointer', color: '#007bff' }} />
                                <FaTrash onClick={() => handleDelete(user.id)} style={{ cursor: 'pointer', color: 'red' }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editingUser && (
                <div className="modal">
                    <h3>Editar Usuário</h3>
                    <input
                        type="text"
                        name="name"
                        value={editingUser.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        value={editingUser.email}
                        onChange={handleChange}
                    />
                    <input
                        type="date"
                        name="birthdate"
                        value={editingUser.birthdate}
                        onChange={handleChange}
                    />
                    <select
                        name="status"
                        value={editingUser.status}
                        onChange={handleChange}
                    >
                        <option value="ativo">Ativo</option>
                        <option value="inativo">Inativo</option>
                    </select>
                    <button onClick={handleSaveEdit}>Salvar</button>
                    <button onClick={() => setEditingUser(null)}>Cancelar</button>
                </div>
            )}
        </div>
    );
};

export default BuscarUsuario;
