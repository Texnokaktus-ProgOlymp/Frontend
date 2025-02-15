import { observer } from "mobx-react-lite";
import { userInfo } from "../../store/userInfo";

export const Username = observer(() => {
    return (
        <div className="flex flex-row items-center gap-2">
            <div className="avatar">
                <div className="w-10 h-10 bg-primary rounded-full">
                    <img src={userInfo.getAvatarUrl()}></img>
                </div>
            </div>
            <div className="text-bold">{userInfo.name}</div>
        </div>
    );
});
