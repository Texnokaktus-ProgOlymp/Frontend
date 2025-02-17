import { observer } from "mobx-react-lite";
import classNames from "classnames";
export const InputField = observer(({ label, field, inputProps }) => {
    return (
        <>
            <label className="fieldset-label" htmlFor={field.name}>
                {label}
            </label>
            <input
                {...inputProps}
                id={field.name}
                className={classNames([
                    "input",
                    "w-full",
                    field.showError && "input-error",
                ])}
                value={field.value}
                onChange={(e) => {
                    field.setValue(e.target.value);
                }}
            />
            {field.showError && (
                <p className="fieldset-label text-error">
                    {field.errorMessage}
                </p>
            )}
        </>
    );
});
