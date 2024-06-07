"use client";

import { api } from "@/convex/_generated/api";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { useQuery } from "convex/react";

const UniqueLink = () => {
    const currentUser = useQuery(api.users.currentUser);

    console.log(currentUser?._id);

    return (
        <>
            <label className="text-xl">Your unique link</label>
            <div className="flex items-center h-12 relative">
                <Input
                    value={`https://n-questions.vercel.app/user/${currentUser?._id}`}
                    disabled
                    className="disabled:opacity-100 disabled:cursor-text"
                />
                <Button className="h-full rounded-l-none absolute right-0">Copy</Button>
            </div>
        </>
    );
};

export default UniqueLink;
