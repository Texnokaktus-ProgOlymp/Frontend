import { useState } from "react";
import "./App.css";
import InputMask from "react-input-mask";
import { LandingPage } from "./LandingPage";
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
function App() {
    const [showForm, setShowForm] = useState(false);
    if (showForm) {
        return (
            <>
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start"></div>
                    <div className="navbar-center">
                        <div className="text-xl text-bold">
                            Форма регистрации
                        </div>
                    </div>
                    <div className="navbar-end gap-4">
                        <div className="w-10 h-10 bg-primary rounded-full">
                            <img></img>
                        </div>
                        <div className="text-bold">Name</div>
                    </div>
                </div>
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
                                Вы вошли в систему с помощью учетной записи
                                Яндекса{" "}
                                <span className="badge badge-soft badge-primary">
                                    login (Name)
                                </span>
                                . <br></br> Учетная запись Яндекса потребуется
                                вам для решения заданий Олимпиады в системе
                                "Яндекс.Контест" на дистанционном и на очном
                                этапе Олимпиады.
                                <br></br>
                                Проверьте что почта является действующей и
                                участник знает пароль и сможет использовать ее
                                во время очного тура Олимпиады.
                            </span>
                            <button
                                className="btn btn-sm btn-primary btn-outline"
                                onClick={() => setShowForm(false)}
                            >
                                Сменить логин
                            </button>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-4/5 shrink-0 shadow-md bg-base-200">
                            <input
                                type="radio"
                                name="my-accordion-2"
                                defaultChecked
                            />
                            <div className="collapse-title font-semibold">
                                Информация об участнике
                            </div>
                            <fieldset className="fieldset collapse-content">
                                <label className="fieldset-label">
                                    Фамилия
                                </label>
                                <input type="text" className="input w-1/2" />
                                <label className="fieldset-label">Имя</label>
                                <input type="text" className="input w-1/2" />
                                <label className="fieldset-label">
                                    Отчество (при наличии)
                                </label>
                                <input type="text" className="input w-1/2" />
                                <label className="fieldset-label">
                                    Дата рождения
                                </label>
                                <input type="date" className="input w-1/2" />
                                <label className="fieldset-label">Снилс</label>
                                <Input />
                                <div className="divider"></div>
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
                                <label className="fieldset-label">
                                    Наименование образовательной организации
                                </label>
                                <input type="text" className="input  w-1/2" />
                                <label className="fieldset-label">
                                    Субъект РФ, в котором находится
                                    образовательная организация
                                </label>
                                <input type="text" className="input  w-1/2" />
                            </fieldset>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-4/5 shrink-0 shadow-md bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">
                                Информация о родителе (законном представителе)
                            </div>
                            <fieldset className="fieldset collapse-content">
                                <label className="fieldset-label">
                                    Фамилия
                                </label>
                                <input type="text" className="input w-1/2" />
                                <label className="fieldset-label">Имя</label>
                                <input type="text" className="input w-1/2" />
                                <label className="fieldset-label">
                                    Отчество (при наличии)
                                </label>
                                <input type="text" className="input w-1/2" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input w-1/2" />
                                <label className="fieldset-label">
                                    Телефон
                                </label>
                                <input type="tel" className="input w-1/2" />
                            </fieldset>
                        </div>
                        <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-4/5 shrink-0 shadow-md bg-base-200">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">
                                Информация о наставнике
                            </div>
                            <fieldset className="fieldset collapse-content">
                                <label className="fieldset-label">
                                    Фамилия
                                </label>
                                <input type="text" className="input w-1/2" />
                                <label className="fieldset-label">Имя</label>
                                <input type="text" className="input w-1/2" />
                                <label className="fieldset-label">
                                    Отчество (при наличии)
                                </label>
                                <input type="text" className="input w-1/2" />
                                <label className="fieldset-label">
                                    Наименование образовательной организации,
                                    которую представляет наставник
                                </label>
                                <input type="text" className="input w-1/2" />
                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input w-1/2" />
                                <label className="fieldset-label">
                                    Телефон
                                </label>
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
                                является действующей, участник знает ее логин и
                                пароль и сможет использовать ее во время
                                Олимпиады.
                            </div>
                        </div>
                        <div className="flex row gap-1 w-4/5">
                            <input type="checkbox" className="checkbox" />
                            <div className="text-xs">
                                Я, родитель (законный представитель) участника,
                                заполняя настоящую форму регистрации, в
                                соответствии с требованиями статьи 9
                                Федерального закона от 27.07.2006 № 152-ФЗ «О
                                персональных данных», подтверждаю свое согласие
                                на обработку вносимых мною персональных данных,
                                ознакомлен и согласен с{" "}
                                <a
                                    href="https://cttit.ru/texnokaktus/tekhnokaktus/2022-2023/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0_%D0%9E%D0%9F%D0%94.pdf"
                                    target="_blank"
                                    className="link link-primary"
                                >
                                    Политикой обработки персональных данных ГБУ
                                    ДО ЦДЮТТИТ Пушкинского района
                                    Санкт-Петербурга
                                </a>
                            </div>
                        </div>
                        <div className="flex row gap-1 w-4/5 justify-end">
                            <button
                                className="btn btn-primary"
                                onClick={() => setShowForm(false)}
                            >
                                Зарегестрироваться
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return <LandingPage setShowForm={setShowForm} />;
}

export default App;
