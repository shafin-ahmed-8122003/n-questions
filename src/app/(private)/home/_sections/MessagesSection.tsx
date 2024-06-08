"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Message from "../_components/Message";

const MessagesSection = () => {
    const messages = useQuery(api.messages.getMessages);
    return (
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {messages &&
                messages.map((message) => (
                    <Message message={message.question} createdAt={message._creationTime} />
                ))}
        </section>
    );
};

export default MessagesSection;
