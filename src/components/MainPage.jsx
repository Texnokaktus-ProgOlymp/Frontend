import { observer } from "mobx-react-lite";
import { Form } from "./form/Form";
import { Header } from "./Header/Header";
import { userInfo } from "../store/userInfo";

export const MainPage = observer(() => {
    if (!userInfo.isRegistered) {
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
                <div className="min-h-screen w-full flex justify-center items-center">
                    <div className="card bg-primary-content w-1/2 min-h-1/3 shadow-sm">
                        <div className="card-body flex gap-2">
                            <h2 className="card-title self-center">
                                Вы успешно зарегистрированы
                            </h2>
                            <p className="card-text self-center">
                                Отборочный тур продлится с 20.02.2025 по 14.03.2025
                            </p>
                            <div className="justify-center card-actions">
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
