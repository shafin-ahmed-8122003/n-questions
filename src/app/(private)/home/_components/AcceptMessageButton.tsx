"use client";

import { Switch } from "@/src/components/ui/switch";
import { useState } from "react";

const AcceptMessageButton = () => {
    const [isOn, setState] = useState(false);

    const checkedChangeHandler = () => {
        setState((prevState) => !prevState);
    };

    return (
        <div className="flex items-center gap-4">
            <Switch checked={isOn} onCheckedChange={checkedChangeHandler} />
            <p>Accept Messages: {isOn ? "On" : "Off"}</p>
        </div>
    );
};

export default AcceptMessageButton;
