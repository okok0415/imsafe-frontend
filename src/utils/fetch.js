
const DOMAIN = "http://localhost:8000";
export const request = async (method, url, data) => {
    return await fetch(DOMAIN + url, {
        method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
        .then((data) => data.json())
        .catch((err) => console.log(err));
};

export const requestMedia = async (method, url, data) => {
    return await fetch(DOMAIN + url, {
        method,
        body: data
    })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};

export const requestGet = async (method, url,) => {
    return await fetch(DOMAIN + url, {
        method,
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    })
        .then((data) => data.json())
        .catch((err) => console.log(err));
};

