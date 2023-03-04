import axios from 'axios';

export const get = async (url) => await axios.get(url);

export const post = async (url, params, headers) => await axios.post(url, params, headers);

export const put = async (url, params, headers) => await axios.put(url, params, headers);

export const destroy = async (url, headers) => await axios.delete(url, headers);
