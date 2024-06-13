import ax from 'axios';
import { MODE, SERVER_URI_PROD, SERVER_URI_DEV } from '@env'

const selectURI = () => {
    if (MODE === 'PROD')
        return SERVER_URI_PROD;
    else if (MODE === 'DEV')
        return SERVER_URI_DEV;
    return '';
}

export const axios = ax.create({
    baseURL: selectURI(),
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});