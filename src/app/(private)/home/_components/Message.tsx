"use client";

import { api } from "@/convex/_generated/api";
import Gap from "@/src/components/Gap";
import { Button } from "@/src/components/ui/button";
import formatTimestamp from "@/src/lib/formatTimestamp";
import { useMutation } from "convex/react";
import html2canvas from "html2canvas";
import { DownloadIcon, Trash2Icon } from "lucide-react";
import { useRef } from "react";
import { toast } from "sonner";

const Message = ({ message }: { message: any }) => {
    const deleteMessage = useMutation(api.messages.deleteMessage);
    const captureRef = useRef(null);

    const onDelete = (messageId: any) => {
        deleteMessage({ messageId: messageId });
        toast("Message deleted");
    };

    const handleCaptureClick = async () => {
        if (captureRef.current) {
            const notCaptureDiv = document.getElementById("not-capture");
            const captureDiv = document.getElementById("capture");
            notCaptureDiv?.classList.add("hidden");
            captureDiv?.classList.replace("hidden", "flex");

            const canvas = await html2canvas(captureRef.current);
            const imgData = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = imgData;
            link.download = "screenshot.png";
            link.click();

            notCaptureDiv?.classList.remove("hidden");
            captureDiv?.classList.add("hidden");
        }
    };

    return (
        <div ref={captureRef} className="p-1">
            <div
                id="not-capture"
                className="w-full min-h-[150px] border-2 border-primary rounded-lg flex flex-col justify-between p-4"
            >
                <h2 className="lg:text-xl text-lg">{message.question}</h2>
                <Gap height={10} />
                <div className="flex items-center justify-between">
                    <time className="lg:text-lg text-sm">
                        {formatTimestamp(message._creationTime)}
                    </time>
                    <div className="flex items-center gap-2">
                        <Button onClick={handleCaptureClick} className="w-12">
                            <DownloadIcon className="stroke-primary-foreground" />
                        </Button>
                        <Button onClick={() => onDelete(message._id)} className="w-12">
                            <Trash2Icon className="stroke-primary-foreground" />
                        </Button>
                    </div>
                </div>
            </div>
            <div
                id="capture"
                className="w-full min-h-[150px] border-2 border-primary rounded-lg flex-col justify-center items-center p-4 relative hidden"
            >
                <h2 className="lg:text-xl text-lg text-center">{message.question}</h2>
                <p className="absolute bottom-2 opacity-30">N-Questions</p>
            </div>
        </div>
    );
};

export default Message;
