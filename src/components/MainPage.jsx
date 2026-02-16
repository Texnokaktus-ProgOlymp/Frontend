import { observer } from "mobx-react-lite";
import { Form } from "./form/Form";
import { Header } from "./Header/Header";
import { userInfo } from "../store/userInfo";
import { participentInfo } from "../store/participentInfo";

export const MainPage = observer(() => {
    let isLoaded =
        userInfo.fetchState === "finished" &&
        participentInfo.fetchState === "finished";

    if (!isLoaded) {
        return null;
    } else if (!participentInfo.isRegistered) {
        return (
            <>
                <Header title="Форма регистрации" />
                <Form />
            </>
        );
    } else {
        return (
            <>
                <Header title={"Информация об участнике"} />
                <div className="w-full flex justify-center items-center h-[90vh] p-4">
                    <ul className="steps steps-vertical">
                        <li className="step step-primary" data-content="✓">
                            <div className="card bg-base-300 max-w-3xl shadow-sm">
                                <div className="card-body flex p-4">
                                    <h2 className="card-title self-center">
                                        Вы успешно зарегистрированы
                                    </h2>
                                </div>
                            </div>
                        </li>
                        <li className="step step-primary" data-content="●">
                            <div className="card bg-base-300 max-w-3xl shadow-sm border-2 border-primary">
                                <div className="card-body flex gap-4">
                                    <h2 className="card-title self-center">
                                        Пройдите отборочный тур
                                    </h2>
                                    <p className="card-text self-center">
                                        Отборочный тур продлится с 20.02.2025 по
                                        14.03.2025
                                    </p>
                                    <div className="justify-center card-actions">
                                        <a
                                            className="btn shrink min-w-[200px]"
                                            target="_blank"
                                            href={`https://contest.yandex.ru/contest/3/enter/`}
                                        >
                                            Ознакомиться с системой
                                        </a>
                                        <a
                                            className="btn btn-primary shrink min-w-[200px]"
                                            target="_blank"
                                            href={
                                                participentInfo.contestId
                                                    ? participentInfo.contestUrl
                                                    : ""
                                            }
                                        >
                                            Перейти к решению отборочного тура
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="step" data-content="">
                            <div className="card bg-base-300 max-w-3xl shadow-sm p-4">
                                Информация появится позже
                            </div>
                        </li>
                    </ul>
                </div>
            </>
        );
    }
});
