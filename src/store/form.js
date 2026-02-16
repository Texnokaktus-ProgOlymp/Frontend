import { makeAutoObservable } from "mobx";
import { fetcher, fetcherWithoutResponse } from "../utils/fetcher";
import { participantInfo } from "./participantInfo";
import { errorStore } from "./error";

const notEmpty = {
    fn: (value) => value?.length > 0,
    error: "Поле обязательно для заполнения",
};
const isWord = {
    fn: (value) => /^[а-яА-ЯёЁ\s-]*$/.test(value),
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
        this.dirty = true;
        this.value = value;
    }
}
class FormData {
    participantInfo;
    parentInfo;
    teacherInfo;

    checkedAgreement;
    checkedLogin;

    constructor() {
        makeAutoObservable(this);
        this.participantInfo = {
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
    get isValidParticipantInfo() {
        return Object.values(this.participantInfo).every(
            (field) => field.isValid,
        );
    }

    get isInProgressParticipantInfo() {
        return Object.values(this.participantInfo).some((field) => field.dirty);
    }

    get hasparticipantInfoShowError() {
        return Object.values(this.participantInfo).some(
            (field) => field.showError,
        );
    }

    get isValidParentInfo() {
        return Object.values(this.parentInfo).every((field) => field.isValid);
    }

    get isInProgressParentInfo() {
        return Object.values(this.parentInfo).some((field) => field.dirty);
    }

    get hasParentInfoShowError() {
        return Object.values(this.parentInfo).some((field) => field.showError);
    }

    get isValidTeacherInfo() {
        return Object.values(this.teacherInfo).every((field) => field.isValid);
    }
    get isInProgressTeacherInfo() {
        return Object.values(this.teacherInfo).some((field) => field.dirty);
    }
    get hasTeacherInfoShowError() {
        return Object.values(this.teacherInfo).some((field) => field.showError);
    }

    get isValid() {
        return (
            this.isValidParticipantInfo &&
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
                    firstName: this.participantInfo.name.value,
                    lastName: this.participantInfo.surname.value,
                    patronym: this.participantInfo.patronymic.value || null,
                },
                birthDate: this.participantInfo.birthday.value, // need reformat,
                snils: this.participantInfo.snils.value,
                email: this.participantInfo.email.value,
                schoolName: this.participantInfo.school.value,
                regionId: Number(this.participantInfo.region.value),
                parent: {
                    name: {
                        firstName: this.parentInfo.name.value,
                        lastName: this.parentInfo.surname.value,
                        patronym: this.parentInfo.patronymic.value || null,
                    },
                    email: this.parentInfo.email.value,
                    phone: this.parentInfo.phone.value,
                },
                teacher: {
                    school: this.teacherInfo.school.value,
                    name: {
                        firstName: this.teacherInfo.name.value,
                        lastName: this.teacherInfo.surname.value,
                        patronym: this.teacherInfo.patronymic.value || null,
                    },
                    email: this.teacherInfo.email.value,
                    phone: this.teacherInfo.phone.value,
                },
                personalDataConsent: true,
                grade: this.participantInfo.grade.value,
            };

            const result = yield fetcherWithoutResponse().call(
                "POST",
                "/api/contests/olymp26/register",
                body,
            );
            if (result.status === 201) {
                yield participantInfo.checkIfRegistered();
            } else {
                if (result.status === 400) {
                    errorStore.showError("Ошибка валидации");
                } else if (result.status === 409) {
                    errorStore.showError("Регистрация закрыта");
                } else {
                    throw new Error();
                }
            }
        } catch (e) {
            errorStore.showError(
                "Не удалось зарегистрироваться. Сервер недоступен",
            );
            console.error(e);
        }
    }
}

export const formData = new FormData();
