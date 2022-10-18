const url = 'https://www.boredapi.com/api';

export const apiGetActivity = async () => {
    const response = await fetch(`${url}/activity`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });
    return response;
};
