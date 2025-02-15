import { observer } from "mobx-react-lite";
import { Form } from "./form/Form";
import { Header } from "./Header/Header";

export const MainPage = observer(() => {
    return (
        <>
            <Header />
            <Form />
        </>
    );
});
