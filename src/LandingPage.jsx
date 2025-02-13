import { useEffect } from "react";
export const LandingPage = ({ setShowForm }) => {
    useEffect(() => {
        window.YaAuthSuggest.init(
            {
                client_id: "c4d941e7f402461dac9944a569328c24",
                response_type: "token",
                redirect_uri: "https://progolymp.cttit.ru/token.html",
            },
            "https://progolymp.cttit.ru",
            {
                view: "button",
                parentId: "container",
                buttonView: "main",
                buttonTheme: "light",
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
                return fetch("/api/authorize", {
                    method: "POST",
                    headers: myHeaders,
                    body: JSON.stringify(payload),
                });
            })
            .then((result) => {
                console.log("Fetch result: ", result);
            });
    });
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Добро пожаловать</h1>
                    <p className="py-6">
                        Для прохождение регистрации авторизируйтесь
                    </p>
                    <div id="container" className="max-w-1/3"></div>
                </div>
            </div>
        </div>
    );
};
