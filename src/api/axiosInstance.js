import ax from 'axios';

// const selectURI = () => {
//     if (process.env.MODE === 'PROD')
//         return process.env.SERVER_URI_PROD;
//     else if (process.env.MODE === 'DEV')
//         return process.env.SERVER_URI_DEV;
//     return '';
// }

// console.log(process.env.MODE);
// console.log(process.env.SERVER_URI_DEV);
// console.log(selectURI());

export const axios = ax.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/json',
    },
});