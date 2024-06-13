import ax from 'axios';

// const SERVER_URI_DEV = 'https://api.github.com'; // to not add an .env file
// const MODE = 'DEV'; // to not add an .env file

const selectURI = () => {
    if (process.env.MODE === 'PROD')
        return process.env.SERVER_URI_PROD;
    else if (process.env.MODE === 'DEV')
        return process.env.SERVER_URI_DEV;
    return '';
}

export const axios = ax.create({
    baseURL: selectURI(),
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});