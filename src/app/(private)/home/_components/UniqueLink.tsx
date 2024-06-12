"use client";

import { api } from "@/convex/_generated/api";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import copyText from "@/src/lib/copyText";
import { useQuery } from "convex/react";

const UniqueLink = () => {
    const currentUser = useQuery(api.users.currentUser);

    return (
        <>
            <label className="text-xl">Your unique link</label>
            <div className="flex items-center h-12 relative">
                {currentUser && (
                    <>
                        <Input
                            value={`https://n-questions.vercel.app/user/${currentUser._id}`}
                            disabled
                            className="disabled:opacity-100 disabled:cursor-text"
                        />
                        <Button
                            onClick={() =>
                                copyText(
                                    `🎉 Hey there!\nGot a question for me?\nAsk away—completely anonymously! 🤫\n👉 https://n-questions.vercel.app/user/${currentUser._id}`,
                                    "URL Copied"
                                )
                            }
                            className="h-full rounded-l-none absolute right-0"
                        >
                            Copy
                        </Button>
                    </>
                )}
            </div>
        </>
    );
};

export default UniqueLink;
