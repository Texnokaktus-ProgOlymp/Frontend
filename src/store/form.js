import { makeAutoObservable } from "mobx";
import { fetcher } from "../utils/fetcher";
import { userInfo } from "./userInfo";

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
const isEmail = {
    fn: (value) =>
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9a-яА-ЯёЁ]+\.)+[a-zA-Za-яА-ЯёЁ]{2,}))$/.test(
            value,
        ),
    error: "Невалидный email",
};
const isPhone = {
    fn: (value) => /^\+7\s\(\d\d\d\)\s\d\d\d-\d\d-\d\d$/.test(value),
    error: "Невалидный телефон",
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
    parentInfo;
    teacherInfo;

    checkedAgreement;
    checkedLogin;

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
            email: new Field("", "email", [notEmpty, isEmail]),
        };
        this.parentInfo = {
            name: new Field("", "name", [notEmpty, isWord]),
            surname: new Field("", "surname", [notEmpty, isWord]),
            patronymic: new Field("", "patronymic", [isWord]),
            phone: new Field("", "phone", [isPhone]),
            email: new Field("", "email", [notEmpty, isEmail]),
        };
        this.teacherInfo = {
            name: new Field("", "name", [notEmpty, isWord]),
            surname: new Field("", "surname", [notEmpty, isWord]),
            patronymic: new Field("", "patronymic", [isWord]),
            phone: new Field("", "phone", [isPhone]),
            email: new Field("", "email", [notEmpty, isEmail]),
            school: new Field("", "school", [notEmpty]),
        };
        this.checkedAgreement = false;
        this.checkedLogin = false;
    }

    get isValidParticipentInfo() {
        return Object.values(this.participentInfo).every(
            (field) => field.isValid,
        );
    }

    get isValidParentInfo() {
        return Object.values(this.parentInfo).every((field) => field.isValid);
    }

    get isValidTeacherInfo() {
        return Object.values(this.teacherInfo).every((field) => field.isValid);
    }

    get isValid() {
        return (
            this.isValidParticipentInfo &&
            this.isValidParentInfo &&
            this.isValidTeacherInfo &&
            this.checkedAgreement &&
            this.checkedLogin
        );
    }

    *register() {
        try {
            const body = {
                name: {
                    firstName: this.participentInfo.name.value,
                    lastName: this.participentInfo.surname.value,
                    patronym: this.participentInfo.patronymic.value,
                },
                birthDate: this.participentInfo.birthday.value, // need reformat,
                snils: this.participentInfo.snils.value,
                email: this.parentInfo.email.value,
                schoolName: this.participentInfo.school.value,
                regionId: Number(this.participentInfo.region.value),
                parent: {
                    name: {
                        firstName: this.parentInfo.name.value,
                        lastName: this.parentInfo.surname.value,
                        patronym: this.parentInfo.patronymic.value,
                    },
                    email: this.parentInfo.email.value,
                    phone: this.parentInfo.phone.value,
                },
                teacher: {
                    school: this.teacherInfo.school.value,
                    name: {
                        firstName: this.teacherInfo.name.value,
                        lastName: this.teacherInfo.surname.value,
                        patronym: this.teacherInfo.patronymic.value,
                    },
                    email: this.teacherInfo.email.value,
                    phone: this.teacherInfo.phone.value,
                },
                personalDataConsent: true,
                grade: this.participentInfo.grade.value,
            };

            yield fetcher().call(
                "POST",
                "https://progolymp.cttit.ru/api/contests/1/register",
                body,
            );
            console.log("REGISTERED");
            yield userInfo.checkIfRegistered();
        } catch (e) {
            console.error(e);
        }
    }
    /*
    {
  "name": {
    "firstName": "string",
    "lastName": "string",
    "patronym": "string"
  },
  "birthDate": "2025-02-17",
  "snils": "string",
  "email": "string",
  "schoolName": "string",
  "regionId": 0,
  "parent": {
    "name": {
      "firstName": "string",
      "lastName": "string",
      "patronym": "string"
    },
    "email": "string",
    "phone": "string"
  },
  "teacher": {
    "school": "string",
    "name": {
      "firstName": "string",
      "lastName": "string",
      "patronym": "string"
    },
    "email": "string",
    "phone": "string"
  },
  "personalDataConsent": true,
  "grade": 0
}*/
}

export const formData = new FormData();
