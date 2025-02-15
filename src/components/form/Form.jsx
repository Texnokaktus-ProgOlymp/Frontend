import InputMask from "react-input-mask";
import { userInfo } from "../../store/userInfo";
import { observer } from "mobx-react-lite";
import { Block } from "./Block";
import { AcordeonItem } from "./AcordeonItem";
import { FieldGroup } from "./FieldGroup";

const Input = (props) => (
    <InputMask
        alwaysShowMask={false}
        className="input w-full"
        placeholder="xxx-xxx-xxx xx"
        mask="999-999-999 99"
        value={props.value}
        onChange={props.onChange}
    />
);

export const Form = observer(() => {
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
                            Проверьте что почта является действующей и участник
                            знает пароль и сможет использовать ее во время
                            очного тура Олимпиады.
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
                        status=""
                        defaultChecked={true}
                    >
                        <FieldGroup>
                            <fieldset className="fieldset w-full">
                                <label className="fieldset-label">
                                    Фамилия
                                </label>
                                <input type="text" className="input w-full" />
                                <label className="fieldset-label">Имя</label>
                                <input type="text" className="input w-full" />
                                <label className="fieldset-label">
                                    Отчество (при наличии)
                                </label>
                                <input type="text" className="input w-full" />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <label className="fieldset-label">
                                    Дата рождения
                                </label>
                                <input type="date" className="input w-full" />
                                <label className="fieldset-label">Снилс</label>
                                <Input />
                            </fieldset>
                        </FieldGroup>
                        <div className="divider"></div>
                        <FieldGroup>
                            <fieldset className="fieldset  w-full">
                                <label className="fieldset-label">
                                    Класс обучения
                                </label>
                                <div className="join join-vertical sm:join-horizontal">
                                    <input
                                        className="join-item btn btn-soft btn-primary"
                                        type="radio"
                                        name="grade"
                                        aria-label="8 класс"
                                    />
                                    <input
                                        className="join-item btn btn-soft btn-primary"
                                        type="radio"
                                        name="grade"
                                        aria-label="9 класс"
                                    />
                                    <input
                                        className="join-item btn btn-soft btn-primary"
                                        type="radio"
                                        name="grade"
                                        aria-label="10 класс"
                                    />
                                    <input
                                        className="join-item btn btn-soft btn-primary"
                                        type="radio"
                                        name="grade"
                                        aria-label="11 класс"
                                    />
                                </div>
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <label className="fieldset-label">
                                    Наименование образовательной организации
                                </label>
                                <input type="text" className="input  w-full" />
                                <label className="fieldset-label">
                                    Субъект РФ, в котором находится
                                    образовательная организация
                                </label>
                                <input type="text" className="input   w-full" />
                            </fieldset>
                        </FieldGroup>
                    </AcordeonItem>
                </Block>
                <Block>
                    <AcordeonItem
                        title="Информация о родителе (законном представителе)"
                        status=""
                    >
                        <FieldGroup>
                            <fieldset className="fieldset  w-full">
                                <label className="fieldset-label">
                                    Фамилия
                                </label>
                                <input type="text" className="input w-full" />
                                <label className="fieldset-label">Имя</label>
                                <input type="text" className="input w-full" />
                                <label className="fieldset-label">
                                    Отчество (при наличии)
                                </label>

                                <input type="text" className="input  w-full" />
                            </fieldset>
                            <fieldset className="fieldset  w-full">
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input w-full" />
                                <label className="fieldset-label">
                                    Телефон
                                </label>
                                <input type="tel" className="input w-full" />
                            </fieldset>
                        </FieldGroup>
                    </AcordeonItem>
                </Block>
                <Block>
                    <AcordeonItem title="Информация о наставнике" status="">
                        <FieldGroup>
                            <fieldset className="fieldset w-full">
                                <label className="fieldset-label">
                                    Фамилия
                                </label>
                                <input type="text" className="input w-full" />
                                <label className="fieldset-label">Имя</label>
                                <input type="text" className="input w-full" />
                                <label className="fieldset-label">
                                    Отчество (при наличии)
                                </label>
                                <input type="text" className="input w-full" />
                            </fieldset>
                            <fieldset className="fieldset w-full">
                                <label className="fieldset-label">
                                    Наименование образовательной организации,
                                    которую представляет наставник
                                </label>
                                <input type="text" className="input w-full" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input w-full" />
                                <label className="fieldset-label">
                                    Телефон
                                </label>
                                <input type="tel" className="input w-full" />
                            </fieldset>
                        </FieldGroup>
                    </AcordeonItem>
                </Block>
                <Block>
                    <div className="flex row gap-1">
                        <input type="checkbox" className="checkbox" />
                        <div className="text-s">
                            Я подтверждаю что учетная запись Яндекс{" "}
                            <span className="badge badge-soft badge-primary">
                                {userInfo.login} ({userInfo.name})
                            </span>{" "}
                            является действующей, участник знает ее логин и
                            пароль и сможет использовать ее во время Олимпиады.
                        </div>
                    </div>
                </Block>
                <Block>
                    <div className="flex row gap-1">
                        <input type="checkbox" className="checkbox" />
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
                            className="btn btn-primary"
                            onClick={() => userInfo.logout()}
                        >
                            Зарегестрироваться
                        </button>
                    </div>
                </Block>
            </div>
        </div>
    );
});
