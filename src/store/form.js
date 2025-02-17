import { makeAutoObservable } from "mobx";
import { region } from "./region";

const notEmpty = {
    fn: (value) => value?.length > 0,
    error: "Поле обязательно для заполнения",
};
const isWord = {
    fn: (value) => /^[а-яА-Я\s-]*$/.test(value),
    error: "Недопустимый символ, разрешены буквы, дефис, пробел",
};
const isNumber = {
    fn: (value) => /^[0-9]*$/.test(value),
    error: "Недопустимый символ, разрешены только цифры",
};

class Field {
    name;
    value;
    validators;

    dirty;

    constructor(value, name, validators) {
        makeAutoObservable(this);
        this.name = name;
        this.value = value;
        this.validators = validators;
        this.dirty = false;
    }

    get isValid() {
        return this.validators.every((fn) => fn.fn(this.value));
    }
    get errorMessage() {
        return this.validators.find((fn) => !fn.fn(this.value))?.error;
    }
    get showError() {
        return this.dirty && !this.isValid;
    }

    setValue(value) {
        console.log("setValue", value);
        this.dirty = true;
        this.value = value;
    }
}
class FormData {
    participentInfo;

    constructor() {
        makeAutoObservable(this);
        this.participentInfo = {
            name: new Field("", "name", [notEmpty, isWord]),
            surname: new Field("", "surname", [notEmpty, isWord]),
            patronymic: new Field("", "patronymic", [isWord]),
            birthday: new Field("", "birthday", [notEmpty]),
            grade: new Field("", "grade", [notEmpty]),
            school: new Field("", "school", [notEmpty]),
            region: new Field("", "region", [notEmpty]),
            snils: new Field("", "snils", [notEmpty]),
        };
    }
    get isValidParticipentInfo() {
        return Object.values(this.participentInfo).every(
            (field) => field.isValid,
        );
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
