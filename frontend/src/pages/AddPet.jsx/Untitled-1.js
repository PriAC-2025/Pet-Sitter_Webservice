
import React, { useState } from 'react';
import api from '../services/api'; // Importa Axios do api.js

const AddPet = () => {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [idade, setIdade] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/pets', { nome, tipo, idade });
            alert('Pet cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar pet:', error);
            alert('Falha ao cadastrar pet.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome do Pet"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                type="text"
                placeholder="Tipo do Pet"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
            />
            <input
                type="number"
                placeholder="Idade do Pet"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />
            <button type="submit">Cadastrar Pet</button>
        </form>
    );
};

export default AddPet;


import React, { useState } from 'react';
import { fetchApi } from '../services/api'; // Importa Fetch Helper do api.js

const AddPet = () => {
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('');
    const [idade, setIdade] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetchApi('/pets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ nome, tipo, idade })
            });
            alert('Pet cadastrado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar pet:', error);
            alert('Falha ao cadastrar pet.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nome do Pet"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                type="text"
                placeholder="Tipo do Pet"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
            />
            <input
                type="number"
                placeholder="Idade do Pet"
                value={idade}
                onChange={(e) => setIdade(e.target.value)}
            />
            <button type="submit">Cadastrar Pet</button>
        </form>
    );
};

export default AddPet;
