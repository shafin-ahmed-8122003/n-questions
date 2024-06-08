"use client";

import { api } from "@/convex/_generated/api";
import { Switch } from "@/src/components/ui/switch";
import { useMutation } from "convex/react";
import { useState } from "react";

const AcceptMessageButton = ({ user }: { user: any }) => {
    const [userState, setUserState] = useState(user);
    const [checked, setChecked] = useState(user.isAcceptingMessage);
    const updateUser = useMutation(api.users.updateUser);

    const checkedChangeHandler = () => {
        setChecked((prevState: boolean) => !prevState);
        setUserState((prevState: any) => ({ ...prevState, isAcceptingMessage: checked }));
        updateUser({ updatedUser: userState });
    };

    return (
        <div className="flex flex-col justify-center max-sm:items-center gap-4">
            <div className="flex items-center gap-4">
                <Switch checked={user.isAcceptingMessage} onCheckedChange={checkedChangeHandler} />
                <p>Accept Messages: {user.isAcceptingMessage ? "On" : "Off"}</p>
            </div>
            <p className="text-sm max-sm:text-center">
                [Sometimes you might need to press this button more than once to activate]
            </p>
        </div>
    );
};

export default AcceptMessageButton;
