"use client";

import { Switch } from "@/src/components/ui/switch";
import { toggle } from "@/src/features/accepting_message/acceptingMessageSlice";
import { RootState } from "@/src/lib/store";
import { useDispatch, useSelector } from "react-redux";

const AcceptMessageButton = () => {
    const isAcceptingMessage = useSelector((state: RootState) => state.isAcceptingMessage);
    const dispatch = useDispatch();

    const checkedChangeHandler = () => {
        dispatch(toggle());
    };

    return (
        <div className="flex items-center gap-4">
            <Switch checked={isAcceptingMessage} onCheckedChange={checkedChangeHandler} />
            <p>Accept Messages: {isAcceptingMessage ? "On" : "Off"}</p>
        </div>
    );
};

export default AcceptMessageButton;
