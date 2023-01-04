import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3002/',
  timeout: 6000
});

export const getGames = async () => {
    return (await instance.get("games")).data;
}
