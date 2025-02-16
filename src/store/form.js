import { makeAutoObservable } from "mobx";

const notEmpty = (value) => value?.length > 0;
const isWord = (value) => /^[a-zA-Zа-яА-Я]+$/.test(value);
const isNumber = (value) => /^[0-9]+$/.test(value);
const isValid = (field) => {
    console.log("isValid", field);
    return field.validate.every((fn) => fn(field.value));
};
class FormData {
    participentInfo;

    constructor() {
        makeAutoObservable(this);
        this.participentInfo = {
            name: {
                value: "",
                name: "name",
                validate: [notEmpty, isWord],
            },
            surname: {
                value: "",
                name: "surname",
                validate: [notEmpty, isWord],
            },
            patronymic: {
                name: "patronymic",
                validate: [isWord],
            },
        };
    }
    get isValidParticipentInfo() {
        return Object.values(this.participentInfo).every(isValid);
    }

    get isValid() {
        return this.isValidParticipentInfo;
    }
    /*this.participentInfo = new FormGroup({
            name: new FormControl("", {
                validators: [requiredValidator()],
            }),
        });*/
    /*{
            name: {
                name: "name",
                validate: [notEmpty, isWord],
            },
            surname: {
                name: "surname",
                //validate: [notEmpty, isWord],
            },
            patronymic: {
                name: "patronymic",
                //validate: [isWord],
            },
            birthday: {
                name: "birthday",
                //validate: notEmpty,
            },
            snils: {
                name: "snils",
                //validate: [notEmpty, isNumber],
            },
            phone: {
                name: "phone",
                //validate: notEmpty,
            },
        };
        */
}

export const formData = new FormData();
