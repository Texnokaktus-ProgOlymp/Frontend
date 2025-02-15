import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { userInfo } from "../store/userInfo";

const getTheme = () => {
    if (window.matchMedia) {
        if (window.matchMedia("prefers-color-scheme: dark").matches) {
            return "dark";
        }
    }
    return "light";
};
export const LandingPage = observer(() => {
    useEffect(() => {
        window.YaAuthSuggest.init(
            {
                client_id: "c4d941e7f402461dac9944a569328c24",
                response_type: "code",
                redirect_uri: "https://yid.progolymp.cttit.ru",
                force_confirm: true,
            },
            "https://yid.progolymp.cttit.ru",
            {
                view: "button",
                parentId: "container",
                buttonView: "main",
                buttonTheme: getTheme(),
                buttonSize: "m",
                buttonBorderRadius: 5,
            },
        )
            .then((result) => result.handler())
            .then((data) => {
                console.log("Recieved Data", data);
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const payload = { code: data.code };
                return fetch("/api/user/authorize", {
                    method: "POST",
                    headers: myHeaders,
                    body: JSON.stringify(payload),
                });
            })
            .then((result) => {
                console.log("Fetch result: ", result);
                const res = result.json();
                console.log("Result: ", res);
                const token = result.body.token;
                console.log("Token: ", token);
                if (token) {
                    userInfo.setToken(token);
                }
            });
    });
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Добро пожаловать</h1>
                    <p className="py-6">
                        Для прохождения регистрации авторизуйтесь через Яндекс
                        ID
                    </p>
                    <div id="container" className="max-w-1/3"></div>
                </div>
            </div>
        </div>
    );
});
