import { makeAutoObservable } from "mobx";
import { fetcher } from "../utils/fetcher";

class Region {
    regionList;
    constructor() {
        makeAutoObservable(this);
    }
    *requestRegionList() {
        if (this.regionList) {
            return this.regionList;
        }
        try {
            const result = yield fetcher().call(
                "GET",
                "/api/regions",
            );
            this.regionList = result;
            return result;
        } catch (e) {
            console.error(e);
        }
    }
}

export const region = new Region();
