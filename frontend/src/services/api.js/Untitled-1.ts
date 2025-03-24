
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api' // Substitua pela URL da sua API
});

export default api;

const API_BASE_URL = 'http://localhost:3000/api'; // Substitua pela URL da sua API

export const fetchApi = async (endpoint, options = {}) => {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
    if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
    }
    return await response.json();
};

