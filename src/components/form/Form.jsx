import { userInfo } from "../../store/userInfo";
import { observer } from "mobx-react-lite";
import { Block } from "./Block";
import { AcordeonItem } from "./AcordeonItem";
import { FieldGroup } from "./FieldGroup";
import { formData } from "../../store/form";
import classNames from "classnames";
import { useEffect } from "react";
import { InputField } from "./InputField";
import { region } from "../../store/region";

import InputMask from "react-input-mask";

export const Form = observer(() => {
    useEffect(() => {
        region.requestRegionList();
    }, []);
    return (
        <div className="p-4">
            <div className="flex items-center flex-col gap-4">
                <Block>
                    <div
                        role="alert"
                        className="alert alert-vertical grid-cols-[auto] sm:alert-horizontal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="stroke-info h-6 w-6 shrink-0"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                        </svg>
                        <div className="text-start">
                            Вы вошли в систему с помощью учетной записи Яндекса{" "}
                            <span className="badge badge-soft badge-primary">
                                {userInfo.login} ({userInfo.name})
                            </span>
                            . <br></br> Учетная запись Яндекса потребуется вам
                            для решения заданий Олимпиады в системе
                            "Яндекс.Контест" на дистанционном и на очном этапе
                            Олимпиады.
                            <br></br>
                            Проверьте, что учетная запись является действующей,
                            участник знает пароль и сможет использовать ее во
                            время очного тура Олимпиады.
                        </div>
                        <button
                            className="btn btn-sm btn-primary btn-outline"
                            onClick={() => userInfo.logout()}
                        >
                            Сменить логин
                        </button>
                    </div>
                </Block>
                <Block>
                    <AcordeonItem
                        title="Информация об участнике"
                        status={
                            formData.isValidParticipentInfo
                                ? "success"
                                : formData.isInProgressParticipentInfo
                                  ? "progress"
                                  : formData.hasParticipentInfoShowError
                                    ? "error"
                                    : "default"
                        }
                        defaultChecked={true}
                    >
                        <FieldGroup>
                            <fieldset className="fieldset w-full">
                                <InputField
                                    label="Фамилия"
                                    inputProps={{ type: "text" }}
                                    field={formData.participentInfo.surname}
                                />
                                <InputField
                                    label="Имя"
                                    inputProps={{ type: "text" }}
                                    field={formData.participentInfo.name}
                                />
                                <InputField
                                    label="Отчество (при наличии)"
                                    inputProps={{ type: "text" }}
                                    field={formData.participentInfo.patronymic}
                                />
                                <InputField
                                    label="Дата рождения"
                                    inputProps={{
                                        type: "date",
                                        min: "2005-01-01",
                                        max: "2015-12-31",
                                    }}
                                    field={formData.participentInfo.birthday}
                                />
                                <InputField
                                    label="Email"
                                    inputProps={{ type: "email" }}
                                    field={formData.participentInfo.email}
                                />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <InputField
                                    label="СНИЛС"
                                    inputProps={{ type: "text" }}
                                    field={formData.participentInfo.snils}
                                />
                                <label className="fieldset-label">
                                    Класс обучения
                                </label>
                                <div className="join join-vertical sm:join-horizontal">
                                    <input
                                        className="join-item btn btn-soft btn-primary"
                                        type="radio"
                                        name="grade"
                                        value="8"
                                        aria-label="8 класс"
                                        checked={
                                            formData.participentInfo.grade
                                                .value === "8"
                                        }
                                        onChange={() => {
                                            formData.participentInfo.grade.setValue(
                                                "8",
                                            );
                                        }}
                                    />
                                    <input
                                        className="join-item btn btn-soft btn-primary"
                                        type="radio"
                                        name="grade"
                                        value="9"
                                        aria-label="9 класс"
                                        checked={
                                            formData.participentInfo.grade
                                                .value === "9"
                                        }
                                        onChange={() => {
                                            formData.participentInfo.grade.setValue(
                                                "9",
                                            );
                                        }}
                                    />
                                    <input
                                        className="join-item btn btn-soft btn-primary"
                                        type="radio"
                                        name="grade"
                                        value="10"
                                        aria-label="10 класс"
                                        checked={
                                            formData.participentInfo.grade
                                                .value === "10"
                                        }
                                        onChange={() => {
                                            formData.participentInfo.grade.setValue(
                                                "10",
                                            );
                                        }}
                                    />
                                    <input
                                        className="join-item btn btn-soft btn-primary"
                                        type="radio"
                                        name="grade"
                                        value="11"
                                        aria-label="11 класс"
                                        checked={
                                            formData.participentInfo.grade
                                                .value === "11"
                                        }
                                        onChange={() => {
                                            formData.participentInfo.grade.setValue(
                                                "11",
                                            );
                                        }}
                                    />
                                </div>
                                {formData.participentInfo.grade.showError && (
                                    <p className="fieldset-label text-error">
                                        {
                                            formData.participentInfo.grade
                                                .errorMessage
                                        }
                                    </p>
                                )}
                                <InputField
                                    label="Наименование образовательной организации"
                                    inputProps={{ type: "text" }}
                                    field={formData.participentInfo.school}
                                />
                                <label className="fieldset-label">
                                    Субъект РФ, в котором находится
                                    образовательная организация
                                </label>
                                <select
                                    defaultValue=""
                                    className="select w-full"
                                    value={
                                        formData.participentInfo.region.value
                                    }
                                    onChange={(e) => {
                                        formData.participentInfo.region.setValue(
                                            e.target.value,
                                        );
                                    }}
                                >
                                    <option value="" disabled={true}>
                                        Выберите регион
                                    </option>
                                    {region.regionList?.map((region) => (
                                        <option
                                            key={region.id}
                                            value={region.id}
                                        >
                                            {region.name}
                                        </option>
                                    ))}
                                </select>
                                {formData.participentInfo.region.showError && (
                                    <p className="fieldset-label text-error">
                                        {
                                            formData.participentInfo.region
                                                .errorMessage
                                        }
                                    </p>
                                )}
                            </fieldset>
                        </FieldGroup>
                    </AcordeonItem>
                </Block>
                <Block>
                    <AcordeonItem
                        title="Информация о родителе (законном представителе)"
                        status={
                            formData.isValidParentInfo
                                ? "success"
                                : formData.isInProgressParentInfo
                                  ? "progress"
                                  : formData.hasParentInfoShowError
                                    ? "error"
                                    : "default"
                        }
                    >
                        <FieldGroup>
                            <fieldset className="fieldset  w-full">
                                <InputField
                                    label="Фамилия"
                                    inputProps={{ type: "text" }}
                                    field={formData.parentInfo.surname}
                                />
                                <InputField
                                    label="Имя"
                                    inputProps={{ type: "text" }}
                                    field={formData.parentInfo.name}
                                />
                                <InputField
                                    label="Отчество (при наличии)"
                                    inputProps={{ type: "text" }}
                                    field={formData.parentInfo.patronymic}
                                />
                            </fieldset>
                            <fieldset className="fieldset  w-full">
                                <InputField
                                    label="Email"
                                    inputProps={{ type: "email" }}
                                    field={formData.parentInfo.email}
                                />
                                <label className="fieldset-label">
                                    Телефон
                                </label>
                                <InputMask
                                    mask="+7 (999) 999-99-99"
                                    className={classNames([
                                        "input",
                                        "w-full",
                                        formData.parentInfo.phone.showError &&
                                            "input-error",
                                    ])}
                                    value={formData.parentInfo.phone.value}
                                    onChange={(e) => {
                                        formData.parentInfo.phone.setValue(
                                            e.target.value,
                                        );
                                    }}
                                >
                                    {(inputProps) => (
                                        <input {...inputProps} type="tel" />
                                    )}
                                </InputMask>
                                {formData.parentInfo.phone.showError && (
                                    <p className="fieldset-label text-error">
                                        {formData.parentInfo.phone.errorMessage}
                                    </p>
                                )}
                            </fieldset>
                        </FieldGroup>
                    </AcordeonItem>
                </Block>
                <Block>
                    <AcordeonItem
                        title="Информация о наставнике"
                        status={
                            formData.isValidTeacherInfo
                                ? "success"
                                : formData.isInProgressTeacherInfo
                                  ? "progress"
                                  : formData.hasTeacherInfoShowError
                                    ? "error"
                                    : "default"
                        }
                    >
                        <FieldGroup>
                            <fieldset className="fieldset w-full">
                                <InputField
                                    label="Фамилия"
                                    inputProps={{ type: "text" }}
                                    field={formData.teacherInfo.surname}
                                />
                                <InputField
                                    label="Имя"
                                    inputProps={{ type: "text" }}
                                    field={formData.teacherInfo.name}
                                />
                                <InputField
                                    label="Отчество (при наличии)"
                                    inputProps={{ type: "text" }}
                                    field={formData.teacherInfo.patronymic}
                                />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <InputField
                                    label="Наименование образовательной организации, которую представляет наставник"
                                    inputProps={{ type: "text" }}
                                    field={formData.teacherInfo.school}
                                />
                                <InputField
                                    label="Email"
                                    inputProps={{ type: "email" }}
                                    field={formData.teacherInfo.email}
                                />
                                <label className="fieldset-label">
                                    Телефон
                                </label>
                                <InputMask
                                    mask="+7 (999) 999-99-99"
                                    className={classNames([
                                        "input",
                                        "w-full",
                                        formData.teacherInfo.phone.showError &&
                                            "input-error",
                                    ])}
                                    value={formData.teacherInfo.phone.value}
                                    onChange={(e) => {
                                        formData.teacherInfo.phone.setValue(
                                            e.target.value,
                                        );
                                    }}
                                >
                                    {(inputProps) => (
                                        <input {...inputProps} type="tel" />
                                    )}
                                </InputMask>
                                {formData.teacherInfo.phone.showError && (
                                    <p className="fieldset-label text-error">
                                        {
                                            formData.teacherInfo.phone
                                                .errorMessage
                                        }
                                    </p>
                                )}
                            </fieldset>
                        </FieldGroup>
                    </AcordeonItem>
                </Block>
                <Block>
                    <div className="flex row gap-1">
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={formData.checkedLogin}
                            onChange={(e) => {
                                formData.checkedLogin = e.target.checked;
                            }}
                        />
                        <div className="text-s">
                            Я подтверждаю, что учетная запись Яндекс{" "}
                            <span className="badge badge-soft badge-primary">
                                {userInfo.login} ({userInfo.name})
                            </span>{" "}
                            является действующей, участник знает ее логин и
                            пароль и сможет использовать ее во время Олимпиады
                        </div>
                    </div>
                </Block>
                <Block>
                    <div className="flex row gap-1">
                        <input
                            type="checkbox"
                            className="checkbox"
                            onChange={(e) => {
                                formData.checkedAgreement = e.target.checked;
                            }}
                            checked={formData.checkedAgreement}
                        />
                        <div className="text-xs">
                            Я, родитель (законный представитель) участника,
                            заполняя настоящую форму регистрации, в соответствии
                            с требованиями статьи 9 Федерального закона от
                            27.07.2006 № 152-ФЗ «О персональных данных»,
                            подтверждаю свое согласие на обработку вносимых мною
                            персональных данных, ознакомлен и согласен с{" "}
                            <a
                                href="https://cttit.ru/texnokaktus/tekhnokaktus/2022-2023/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%9E%D0%9F%D0%94.pdf"
                                target="_blank"
                                className="link link-primary"
                            >
                                Политикой обработки персональных данных ГБУ ДО
                                ЦДЮТТИТ Пушкинского района Санкт-Петербурга
                            </a>
                        </div>
                    </div>
                    <div className="flex row gap-1 justify-end">
                        <button
                            className={classNames([
                                "btn",
                                "btn-primary",
                                !formData.isValid && "btn-disabled",
                            ])}
                            onClick={() => formData.register()}
                        >
                            Зарегистрироваться
                        </button>
                    </div>
                </Block>
            </div>
        </div>
    );
});
