"use client";

import { api } from "@/convex/_generated/api";
import Gap from "@/src/components/Gap";
import { Button } from "@/src/components/ui/button";
import formatTimestamp from "@/src/lib/formatTimestamp";
import { useMutation } from "convex/react";
import { Share2Icon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";

const Message = ({ message }: { message: any }) => {
    const deleteMessage = useMutation(api.messages.deleteMessage);

    const onDelete = (messageId: any) => {
        deleteMessage({ messageId: messageId });
        toast("Message deleted");
    };

    return (
        <div className="w-full min-h-[150px] border-2 border-primary rounded-lg flex flex-col justify-between p-4">
            <h2 className="lg:text-xl text-lg">{message.question}</h2>
            <Gap height={10} />
            <div className="flex items-center justify-between">
                <time className="lg:text-lg text-sm">{formatTimestamp(message._creationTime)}</time>
                <div className="flex items-center gap-2">
                    <Button className="w-12">
                        <Share2Icon className="stroke-primary-foreground" />
                    </Button>
                    <Button onClick={() => onDelete(message._id)} className="w-12">
                        <Trash2Icon className="stroke-primary-foreground" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Message;
