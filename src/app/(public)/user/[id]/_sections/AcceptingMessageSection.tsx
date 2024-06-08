"use client";

import { api } from "@/convex/_generated/api";
import Gap from "@/src/components/Gap";
import Salam from "@/src/components/Salam";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { useMutation } from "convex/react";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const AcceptingMessageSection = ({ user }: { user: any }) => {
    const sendMessage = useMutation(api.messages.sendMessage);
    const [message, setMessage] = useState("");

    const onSubmit = (userId: any) => {
        if (message.length > 0) {
            sendMessage({ userId: userId, message: message });
            setMessage("");
            toast("Sent message successfully!");
        } else {
            toast("You cannot send a empty message");
        }
    };

    return (
        <main className="xl:px-60 lg:px-40 px-4 py-4 h-full relative flex flex-col items-center justify-center">
            <section className="flex flex-col flex-1 justify-center h-full gap-4">
                <Salam name="Human" />
                <div className="flex flex-col w-full gap-2">
                    <Label className="text-lg" htmlFor="message">
                        Send Anonymous Message to {user.name}
                    </Label>
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here"
                        id="message"
                    />
                    <Button
                        onClick={() => onSubmit(user._id)}
                        size="lg"
                        className="w-min md:w-1/3 self-end"
                    >
                        Send message
                    </Button>
                </div>
            </section>
            <section className="p-0 flex flex-col justify-center items-center">
                <p>Want to create your own?</p>
                <Link href="/">
                    <Button size="link" variant="link">
                        Click Here
                    </Button>
                </Link>
                <Gap height={15} />
                <p className="opacity-60">This webapp is made by Shafin</p>
            </section>
        </main>
    );
};

export default AcceptingMessageSection;
