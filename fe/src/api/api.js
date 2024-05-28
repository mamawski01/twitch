import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:6900/api',
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user');

    if (userDetails) {
      const { token } = JSON.parse(userDetails);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

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

export async function getChannelSettings() {
  try {
    return await apiClient.get('/settings/channel');
  } catch (exception) {
    return { error: true, exception };
  }
}

export async function updateChannelSettings(data) {
  try {
    return await apiClient.put('/settings/channel', data);
  } catch (exception) {
    return { error: true, exception };
  }
}

export async function changePassword(data) {
  try {
    return await apiClient.patch('/settings/password', data);
  } catch (exception) {
    return { error: true, exception };
  }
}

export async function getFollowedChannels() {
  try {
    return await apiClient.get('/channels/followed');
  } catch (exception) {
    return { error: true, exception };
  }
}

export async function getChannels() {
  try {
    return await apiClient.get('/channels');
  } catch (exception) {
    return { error: true, exception };
  }
}

export async function getChannelDetails(channelId) {
  try {
    return await apiClient.get(`/channels/${channelId}`);
  } catch (exception) {
    return { error: true, exception };
  }
}
