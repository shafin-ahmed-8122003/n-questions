"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Message from "../_components/Message";

const MessagesSection = () => {
    const messages = useQuery(api.messages.getMessages);

    if (messages) {
        if (messages.length > 0) {
            return (
                <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    {messages &&
                        messages.map((message) => <Message key={message._id} message={message} />)}
                </section>
            );
        } else {
            return (
                <section className="text-center">
                    You will see your anonymous questions here
                </section>
            );
        }
    }
};

export default MessagesSection;
