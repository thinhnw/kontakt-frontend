// src/services/api.js
import axios from 'axios';

const API = axios.create({ baseURL: 'https://your-api-url.com' });

export const loginUser = (email, password) =>
  API.post('/login', { email, password });

export const fetchChatBoxes = () => API.get('/chats');
