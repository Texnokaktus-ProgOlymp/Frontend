import { useEffect } from "react";
import "./App.css";
import { LandingPage } from "./LandingPage";
import { userInfo } from "../store/userInfo";
import { observer } from "mobx-react-lite";
import { MainPage } from "./MainPage";

const App = observer(() => {
    useEffect(() => {
        userInfo.getToken();
    });

    if (userInfo.isAuthorized()) {
        return <MainPage />;
    }
    return <LandingPage />;
});

export default App;
