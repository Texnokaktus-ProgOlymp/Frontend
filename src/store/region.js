import { makeAutoObservable } from "mobx";
import { fetcher } from "../utils/fetcher";

class Region {
    regionList;
    constructor() {
        makeAutoObservable(this);
    }
    *requestRegionList() {
        try {
            const result = yield fetcher().call(
                "GET",
                "https://progolymp.cttit.ru/api/regions",
            );
            this.regionList = result;
        } catch (e) {
            console.error(e);
        }
    }
}

export const region = new Region();