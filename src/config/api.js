import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3333/api/' // URL do backend local
        : 'https://finance.johncode.tech/api2/' // URL do backend de produção
});

