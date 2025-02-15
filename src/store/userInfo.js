import { makeAutoObservable } from "mobx";
const storageKey = "technoKaktusToken";

class UserInfo {
    login;
    name;
    avatarId;
    token;

    constructor() {
        makeAutoObservable(this);
        this.getToken();
    }
    getAvatarUrl() {
        return `https://avatars.yandex.net/get-yapic/${this.avatarId}/50`;
    }
    setToken(token) {
        this.token = token;
        window.localStorage.setItem(storageKey, token);
    }
    getToken() {
        console.log("GET TOKEN", window.localStorage.getItem(storageKey));
        this.token = window.localStorage.getItem(storageKey);
    }
    logout() {
        this.token = undefined;
        window.localStorage.removeItem(storageKey);
    }
    isAuthorized() {
        return Boolean(this.token);
    }
}

export const userInfo = new UserInfo();
