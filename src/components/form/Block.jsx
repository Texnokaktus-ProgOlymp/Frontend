import { observer } from "mobx-react-lite";

export const Block = observer(({ children }) => {
    return <div className="w-full max-w-7xl">{children}</div>;
});
