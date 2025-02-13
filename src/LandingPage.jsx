import { useEffect } from "react";
export const LandingPage = ({ setShowForm }) => {
    useEffect(() => {
        window.YaAuthSuggest.init(
            {
                client_id: "c46f0c53093440c39f12eff95a9f2f93",
                response_type: "token",
                redirect_uri: "https://examplesite.com/suggest/token",
            },
            "https://examplesite.com",
            {
                view: "button",
                parentId: "container",
                buttonView: "main",
                buttonTheme: "light",
                buttonSize: "m",
                buttonBorderRadius: 5,
            },
        )
            .then(function (result) {
                return result.handler();
            })
            .then(function (data) {
                console.log("Сообщение с токеном: ", data);
                document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
            })
            .catch(function (error) {
                console.log("Что-то пошло не так: ", error);
                document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
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
