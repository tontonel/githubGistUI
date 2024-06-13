import { axios } from "../axiosInstance";

export const fetchGistForks = async (gistId) => {
    const response = await axios.get(`/gists/${gistId}/forks?per_page=3`);
    return response.data;
}