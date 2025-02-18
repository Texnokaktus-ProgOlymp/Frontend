import { userInfo } from "../store/userInfo";

export const fetcher = () => {
    let myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");
    if (userInfo.token) {
        myHeader.append("Authorization", "Bearer " + userInfo.token);
    }
    return {
        call: (method, url, body) => {
            console.log("API call: ", method, url);
            return fetch(url, {
                method,
                headers: myHeader,
                body: JSON.stringify(body),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Result ", data);
                    return data;
                })
                .catch((error) => {
                    console.error("Error ", error);
                    throw error;
                });
        },
    };
};

export const fetcherWithoutResponse = () => {
    let myHeader = new Headers();
    myHeader.append("Content-Type", "application/json");
    if (userInfo.token) {
        myHeader.append("Authorization", "Bearer " + userInfo.token);
    }
    return {
        call: (method, url, body) => {
            console.log("API call: ", method, url);
            return fetch(url, {
                method,
                headers: myHeader,
                body: JSON.stringify(body),
            }).catch((error) => {
                console.error("Error ", error);
                throw error;
            });
        },
    };
};
