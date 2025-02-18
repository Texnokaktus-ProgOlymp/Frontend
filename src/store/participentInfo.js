import { fetcher } from "../utils/fetcher";
import { makeAutoObservable } from "mobx";

class ParticipentInfo {
    isRegistered;

    contestId;

    fetchState = "initial";
    constructor() {
        makeAutoObservable(this);
    }
    *checkIfRegistered() {
        try {
            this.fetchState = "fetching";
            const result = yield fetcher().call(
                "GET",
                "https://progolymp.cttit.ru/api/contests/1/participation",
            );
            this.isRegistered = result.isUserRegistered;
            this.contestId = result.preliminaryStageParticipation?.contestId;
            this.fetchState = "finished";
        } catch (e) {
            this.fetchState = "finished";
            console.error(e);
        }
    }

    get contestUrl() {
        return `https://contest.yandex.ru/contest/${this.contestId}/enter/`;
    }
}
export const participentInfo = new ParticipentInfo();
