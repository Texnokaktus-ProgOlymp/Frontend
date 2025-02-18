import { observer } from "mobx-react-lite";
import { Form } from "./form/Form";
import { Header } from "./Header/Header";
import { userInfo } from "../store/userInfo";
import { participentInfo } from "../store/participentInfo";
import { useEffect } from "react";

export const MainPage = observer(() => {
    useEffect(() => {
        console.log(
            "useEffect",
            userInfo.fetchState,
            participentInfo.fetchState,
            participentInfo.isRegistered,
        );
    });
    if (
        !userInfo.fetchState === "finished" ||
        !participentInfo.fetchState === "finished"
    ) {
        console.log(
            "fetchState",
            userInfo.fetchState,
            participentInfo.fetchState,
        );
        return null;
    }
    if (
        participentInfo.fetchState === "finished" &&
        !participentInfo.isRegistered
    ) {
        console.log("not registered");
        return (
            <>
                <Header title="Форма регистрации" />
                <Form />
            </>
        );
    } else {
        console.log("registered");
        return (
            <>
                <Header title={"Информация об участнике"} />
                <div className="w-full flex justify-center items-center h-[90vh]">
                    <div className="card bg-primary-content max-w-3xl m-4 min-h-1/3 shadow-sm">
                        <div className="card-body flex gap-4">
                            <h2 className="card-title self-center">
                                Вы успешно зарегистрированы
                            </h2>
                            <p className="card-text self-center">
                                Отборочный тур продлится с 20.02.2025 по
                                14.03.2025
                            </p>
                            <div className="justify-center card-actions">
                                <button
                                    className="btn btn-outline"
                                    onClick={() => {
                                        userInfo.logout();
                                    }}
                                >
                                    Сменить аккаунт
                                </button>
                                <a
                                    className="btn btn-primary"
                                    target="_blank"
                                    href={
                                        userInfo.contestId
                                            ? userInfo.contestUrl
                                            : ""
                                    }
                                >
                                    Перейти к решению отборочного тура
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
});
