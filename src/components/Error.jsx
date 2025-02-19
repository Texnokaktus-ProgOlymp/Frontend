import { observer } from "mobx-react-lite";
import { errorStore } from "../store/error";

export const Error = observer(() => {
    return errorStore.errorMessage ? (
        <div className="toast toast-start absolute">
            <div className="alert alert-error">
                <span>{errorStore.errorMessage}</span>
            </div>
        </div>
    ) : null;
});
