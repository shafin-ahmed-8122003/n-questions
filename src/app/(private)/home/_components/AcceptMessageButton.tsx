"use client";

import { api } from "@/convex/_generated/api";
import { Switch } from "@/src/components/ui/switch";
import { toggle } from "@/src/features/accepting_message/acceptingMessageSlice";
import { RootState } from "@/src/lib/store";
import { useMutation } from "convex/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AcceptMessageButton = ({ user }: { user: any }) => {
    const isAcceptingMessage = useSelector((state: RootState) => state.isAcceptingMessage);
    const dispatch = useDispatch();
    const [userState, setUserState] = useState(user);
    const updateUser = useMutation(api.users.updateUser);

    const checkedChangeHandler = () => {
        dispatch(toggle());
        setUserState({
            ...userState,
            isAcceptingMessage: isAcceptingMessage,
        });
        updateUser({ updatedUser: userState });
    };

    return (
        <div className="flex items-center gap-4">
            <Switch checked={isAcceptingMessage} onCheckedChange={checkedChangeHandler} />
            <p>Accept Messages: {isAcceptingMessage ? "On" : "Off"}</p>
        </div>
    );
};

export default AcceptMessageButton;
