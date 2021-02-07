import axios from 'axios';

export const axiosWithAuth =() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = user.token;
    return axios.create({
        baseURL: "https://how-to-lifehack.herokuapp.com",
        headers: { Authorization: token }
      });
};