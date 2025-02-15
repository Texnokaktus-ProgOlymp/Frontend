import { makeAutoObservable } from "mobx";
import { fetcher } from "../utils/fetcher";
const storageKey = "technoKaktusToken";

class UserInfo {
    login;
    name;
    avatarId;
    token;

    isTokenChecked;

    constructor() {
        makeAutoObservable(this);
        this.isTokenChecked = false;
    }

    *fetchUserData() {
        try {
            console.log("FETCH USER DATA");
            const result = yield fetcher().call("GET", "https://progolymp.cttit.ru/api/user/current");
            this.login = result.login;
            this.name = result.displayName;
            this.avatarId = result.avatarId;
        } catch {
            // ignore
        }
    }
    getAvatarUrl() {
        return `https://avatars.yandex.net/get-yapic/${this.avatarId}/islands-middle`;
    }
    setToken(token) {
        this.token = token;
        window.localStorage.setItem(storageKey, token);
    }
    getToken() {
        this.token = undefined;
        this.token = window.localStorage.getItem(storageKey);
        this.isTokenChecked = true;

        if (this.token && !this.login) {
            this.fetchUserData();
        }
    }

    logout() {
        this.token = undefined;
        window.localStorage.removeItem(storageKey);
    }
    isAuthorized() {
        console.log("IS AUTHORIZED", this.token);
        return Boolean(this.token);
    }

    *fetchToken(code) {
        const payload = { code };
        const result = yield fetcher().call(
            "POST",
            "/api/user/authorize",
            payload,
        );
        console.log("Result: ", result);
        const token = result.token;
        console.log("Token: ", token);
        if (token) {
            this.setToken(token);
            yield this.fetchUserData();
        }
    }
}
export const userInfo = new UserInfo();
