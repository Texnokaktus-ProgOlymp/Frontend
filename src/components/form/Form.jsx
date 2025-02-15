import InputMask from "react-input-mask";
import { userInfo } from "../../store/userInfo";
import { observer } from "mobx-react-lite";

const Input = (props) => (
    <InputMask
        alwaysShowMask={false}
        className="input w-1/2"
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
                <div role="alert" className="alert w-4/5">
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
                    <span>
                        Вы вошли в систему с помощью учетной записи Яндекса{" "}
                        <span className="badge badge-soft badge-primary">
                            login (Name)
                        </span>
                        . <br></br> Учетная запись Яндекса потребуется вам для
                        решения заданий Олимпиады в системе "Яндекс.Контест" на
                        дистанционном и на очном этапе Олимпиады.
                        <br></br>
                        Проверьте что почта является действующей и участник
                        знает пароль и сможет использовать ее во время очного
                        тура Олимпиады.
                    </span>
                    <button
                        className="btn btn-sm btn-primary btn-outline"
                        onClick={() => userInfo.logout()}
                    >
                        Сменить логин
                    </button>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-4/5 shrink-0 shadow-md bg-base-200">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold flex flex-row justify-between">
                        <div>Информация об участнике</div>
                        <div className="badge badge-success">
                            <svg
                                className="size-[1em]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="currentColor"
                                    strokeLinejoin="miter"
                                    strokeLinecap="butt"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></circle>
                                    <polyline
                                        points="7 13 10 16 17 8"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></polyline>
                                </g>
                            </svg>
                            Заполнено
                        </div>
                    </div>
                    <fieldset className="fieldset collapse-content">
                        <label className="fieldset-label">Фамилия</label>
                        <input type="text" className="input w-1/2" />
                        <label className="fieldset-label">Имя</label>
                        <input type="text" className="input w-1/2" />
                        <label className="fieldset-label">
                            Отчество (при наличии)
                        </label>
                        <input type="text" className="input w-1/2" />
                        <label className="fieldset-label">Дата рождения</label>
                        <input type="date" className="input w-1/2" />
                        <label className="fieldset-label">Снилс</label>
                        <Input />
                        <div className="divider"></div>
                        <label className="fieldset-label">Класс обучения</label>
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
                        <label className="fieldset-label">
                            Наименование образовательной организации
                        </label>
                        <input type="text" className="input  w-1/2" />
                        <label className="fieldset-label">
                            Субъект РФ, в котором находится образовательная
                            организация
                        </label>
                        <input type="text" className="input  w-1/2" />
                    </fieldset>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-4/5 shrink-0 shadow-md bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold flex flex-row justify-between">
                        <div>
                            Информация о родителе (законном представителе)
                        </div>
                        <div className="badge badge-info">
                            <svg
                                className="size-[1em]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="currentColor"
                                    strokeLinejoin="miter"
                                    strokeLinecap="butt"
                                >
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></circle>
                                    <path
                                        d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="square"
                                        strokeMiterlimit="10"
                                        strokeWidth="2"
                                    ></path>
                                    <circle
                                        cx="12"
                                        cy="7.25"
                                        r="1.25"
                                        fill="currentColor"
                                        strokeWidth="2"
                                    ></circle>
                                </g>
                            </svg>
                            В процессе
                        </div>
                    </div>

                    <fieldset className="fieldset collapse-content">
                        <label className="fieldset-label">Фамилия</label>
                        <input type="text" className="input w-1/2" />
                        <label className="fieldset-label">Имя</label>
                        <input type="text" className="input w-1/2" />
                        <label className="fieldset-label">
                            Отчество (при наличии)
                        </label>
                        <input type="text" className="input w-1/2" />
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input w-1/2" />
                        <label className="fieldset-label">Телефон</label>
                        <input type="tel" className="input w-1/2" />
                    </fieldset>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-4/5 shrink-0 shadow-md bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold flex flex-row justify-between">
                        <div>Информация о наставнике</div>
                        <div className="badge badge-error">
                            <svg
                                className="size-[1em]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g fill="currentColor">
                                    <rect
                                        x="1.972"
                                        y="11"
                                        width="20.056"
                                        height="2"
                                        transform="translate(-4.971 12) rotate(-45)"
                                        fill="currentColor"
                                        strokeWidth={0}
                                    ></rect>
                                    <path
                                        d="m12,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-20C7.038,3,3,7.037,3,12s4.038,9,9,9,9-4.037,9-9S16.962,3,12,3Z"
                                        strokeWidth={0}
                                        fill="currentColor"
                                    ></path>
                                </g>
                            </svg>
                            Есть ошибки
                        </div>
                    </div>
                    <fieldset className="fieldset collapse-content">
                        <label className="fieldset-label">Фамилия</label>
                        <input type="text" className="input w-1/2" />
                        <label className="fieldset-label">Имя</label>
                        <input type="text" className="input w-1/2" />
                        <label className="fieldset-label">
                            Отчество (при наличии)
                        </label>
                        <input type="text" className="input w-1/2" />
                        <label className="fieldset-label">
                            Наименование образовательной организации, которую
                            представляет наставник
                        </label>
                        <input type="text" className="input w-1/2" />
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input w-1/2" />
                        <label className="fieldset-label">Телефон</label>
                        <input type="tel" className="input w-1/2" />
                    </fieldset>
                </div>
                <div className="flex row gap-1 w-4/5">
                    <input type="checkbox" className="checkbox" />
                    <div className="text-s">
                        Я подтверждаю что учетная запись Яндекс{" "}
                        <span className="badge badge-soft badge-primary">
                            login (Name)
                        </span>{" "}
                        является действующей, участник знает ее логин и пароль и
                        сможет использовать ее во время Олимпиады.
                    </div>
                </div>
                <div className="flex row gap-1 w-4/5">
                    <input type="checkbox" className="checkbox" />
                    <div className="text-xs">
                        Я, родитель (законный представитель) участника, заполняя
                        настоящую форму регистрации, в соответствии с
                        требованиями статьи 9 Федерального закона от 27.07.2006
                        № 152-ФЗ «О персональных данных», подтверждаю свое
                        согласие на обработку вносимых мною персональных данных,
                        ознакомлен и согласен с{" "}
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
                <div className="flex row gap-1 w-4/5 justify-end">
                    <button
                        className="btn btn-primary"
                        onClick={() => userInfo.logout()}
                    >
                        Зарегестрироваться
                    </button>
                </div>
            </div>
        </div>
    );
});
