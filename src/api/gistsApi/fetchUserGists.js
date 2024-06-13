import { axios } from '../axiosInstance';

export const fetchUserGists = async (username) => {
    try {
        const response = await axios.get(`/users/${username}/gists`);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}