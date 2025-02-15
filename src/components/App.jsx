import { useEffect } from "react";
import "./App.css";
import { LandingPage } from "./LandingPage";
import { Form } from "./Form";
import { userInfo } from "../store/userInfo";
import { observer } from "mobx-react-lite";

const App = observer(() => {
    useEffect(() => {
        userInfo.getToken();
    });

    if (userInfo.isAuthorized()) {
        return <Form />;
    }
    return <LandingPage />;
});

export default App;
