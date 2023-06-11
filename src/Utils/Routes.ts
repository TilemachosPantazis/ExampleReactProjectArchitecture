export const API_ENDPOINTS = {
    exampleCall: 'api/examplecall',
    getAddress: (address:string) =>  `https://atlas.microsoft.com/search/address/json?api-version=1.0&subscription-key=29Ecjm7r-UtK4eHQLbdI_tsuj1KpU7t9BCjdGzndbc8&query=${address}`
    //https://atlas.microsoft.com/search/fuzzy/{format}?api-version=1.0&query=${address}
};
export const APIbaseURL = 'https://api.example.com/';