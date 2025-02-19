import { makeAutoObservable } from "mobx";

class ErrorStore {
    errorMessage;

    constructor() {
        makeAutoObservable(this);
    }

    showError(msg) {
        this.errorMessage = msg;
        setTimeout(() => {
            this.errorMessage = undefined;
        }, 5000);
    }
}

export const errorStore = new ErrorStore()