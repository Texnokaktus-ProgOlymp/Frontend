import { useState } from "react";
import "./App.css";
import InputMask from "react-input-mask";
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
            <div className="p-4">
                <div className="flex items-center flex-col gap-4">
                    <h2 className="text-xl font-bold text-center">
                        Форма регистрации
                    </h2>

                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-4/5 shrink-0 shadow-md">
                        <input
                            type="radio"
                            name="my-accordion-2"
                            defaultChecked
                        />
                        <div className="collapse-title font-semibold">
                            Информация об участнике
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
                                Дата рождения
                            </label>
                            <input type="date" className="input w-1/2" />
                            <label className="fieldset-label">Снилс</label>
                            <Input />
                            <div className="divider"></div>
                            <label className="fieldset-label">
                                Класс обучения
                            </label>
                            <div className="join">
                                <input
                                    className="join-item btn"
                                    type="radio"
                                    name="8"
                                    aria-label="8 класс"
                                />
                                <input
                                    className="join-item btn"
                                    type="radio"
                                    name="9"
                                    aria-label="9 класс"
                                />
                                <input
                                    className="join-item btn"
                                    type="radio"
                                    name="10"
                                    aria-label="10 класс"
                                />
                                <input
                                    className="join-item btn"
                                    type="radio"
                                    name="11"
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
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-4/5 shrink-0 shadow-md">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">
                            Инфромация о родителе (законном представителе)
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
                    <div className="collapse collapse-arrow bg-base-100 border border-base-300 w-4/5 shrink-0 shadow-md">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">
                            Инфромация о наставнике
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
                                Наименование образовательной организации,
                                которую представляет наставник
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
                        <div className="text-xs">
                            Я, родитель (законный представитель) участника,
                            заполняя настоящую форму регистрации, в соответствии
                            с требованиями статьи 9 Федерального закона от
                            27.07.2006 № 152-ФЗ «О персональных данных»,
                            подтверждаю свое согласие на обработку вносимых мною
                            персональных данных, ознакомлен и согласен с
                            Политикой обработки персональных данных ГБУ ДО
                            ЦДЮТТИТ Пушкинского района Санкт-Петербурга{" "}
                            <a
                                href="https://clck.ru/33HEzE"
                                target="_blank"
                                className="link link-primary"
                            >
                                https://clck.ru/33HEzE
                            </a>
                        </div>
                    </div>
                    <div className="flex row gap-1 w-4/5 justify-end">
                        <button
                            className="btn"
                            onClick={() => setShowForm(false)}
                        >
                            Сменить Яндекс логин
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={() => setShowForm(false)}
                        >
                            Зарегестрироваться
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Добро пожаловать</h1>
                    <p className="py-6">
                        Для прохождение регистрации авторизируйтесь
                    </p>
                    <button
                        className="btn btn-primary"
                        onClick={() => setShowForm(true)}
                    >
                        Клик сюда
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
