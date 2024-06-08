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
        <div className="flex items-center gap-4">
            <Switch checked={user.isAcceptingMessage} onCheckedChange={checkedChangeHandler} />
            <p>Accept Messages: {user.isAcceptingMessage ? "On" : "Off"}</p>
        </div>
    );
};

export default AcceptMessageButton;
