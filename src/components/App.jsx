import { useEffect } from "react";
import "./App.css";
import { LandingPage } from "./LandingPage";
import { userInfo } from "../store/userInfo";
import { observer } from "mobx-react-lite";
import { MainPage } from "./MainPage";
import { Error } from "./Error";

const App = observer(() => {
    useEffect(() => {
        if (!userInfo.isTokenChecked) {
            userInfo.getToken();
        }
    });

    if (!userInfo.isTokenChecked) {
        return null;
    }
    return (
        <div className="relative">
            {userInfo.isAuthorized() ? <MainPage /> : <LandingPage />}
            <Error />
        </div>
    );
});

export default App;
