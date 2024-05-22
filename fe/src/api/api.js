import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:6900/api',
  timeout: 1000,
});

export async function login(data) {
  try {
    return await apiClient.post('/auth/login', data);
  } catch (exception) {
    return { error: true, exception };
  }
}

export async function register(data) {
  try {
    return await apiClient.post('/auth/register', data);
  } catch (exception) {
    return { error: true, exception };
  }
}
