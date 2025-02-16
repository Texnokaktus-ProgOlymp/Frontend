import { observer } from "mobx-react-lite";
export const FieldGroup = observer(({ children }) => {
    return <div className="w-full md:flex gap-4 flex-row">{children}</div>;
});
