import axios from 'axios';
import {APIbaseURL } from './Routes';

export const axiosClient = axios;
axiosClient.defaults.baseURL = APIbaseURL;

