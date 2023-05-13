import { get, post, put, destroy } from "./rest";

const BaseUrl = '/api'

export const getGreenHouses = () => {
  get('/api/')
}

export const login = (params, headers) => post(`${BaseUrl}/login`, params, { headers: headers });

export const logout = (headers) => destroy(`${BaseUrl}/logout`, { headers: headers });

export const getCSRFToken = () => get(`${BaseUrl}/initialize`);

export const createGreenHouse = (body, headers) => post(`${BaseUrl}/user/green_houses`, body, { headers: headers })
