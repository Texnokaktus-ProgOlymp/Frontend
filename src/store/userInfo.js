import { makeAutoObservable } from "mobx";
import { fetcher } from "../utils/fetcher";
import { participantInfo } from "./participantInfo.js";
const storageKey = "technoKaktusToken";

class UserInfo {
    login;
    name;
    avatarId;
    token;

    fetchState;

    isTokenChecked;

    constructor() {
        makeAutoObservable(this);
        this.isTokenChecked = false;
        this.fetchState = "inint";
    }

    *fetchUserData() {
        try {
            this.fetchState = "fetching";
            const result = yield fetcher().call(
                "GET",
                "/api/user/current",
            );
            this.login = result.login;
            this.name = result.displayName;
            this.avatarId = result.avatarId;
        } catch {
            this.logout();
            this.fetchState = "finished";
            return;
        }
        try {
            yield participantInfo.checkIfRegistered();
            this.fetchState = "finished";
        } catch {
            this.fetchState = "finished";
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
        return Boolean(this.token);
    }

    *fetchToken(code) {
        const payload = { code };
        const result = yield fetcher().call(
            "POST",
            "/api/user/authorize",
            payload,
        );
        const token = result.token;
        if (token) {
            this.setToken(token);
            yield this.fetchUserData();
        }
    }
}
export const userInfo = new UserInfo();
