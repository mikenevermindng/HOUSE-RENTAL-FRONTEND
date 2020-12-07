import axios from 'axios';

console.log(process.env);

const http = axios.create({
	baseURL: process.env.REACT_APP_BASEURL
});

export default http;
