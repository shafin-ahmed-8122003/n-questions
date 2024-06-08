import Gap from "@/src/components/Gap";
import { Button } from "@/src/components/ui/button";
import formatTimestamp from "@/src/lib/formatTimeStamp";
import { Share2Icon, Trash2Icon } from "lucide-react";

const Message = ({ message, createdAt }: { message: string; createdAt: number }) => {
    return (
        <div className="w-full min-h-[150px] border-2 border-primary rounded-lg flex flex-col justify-between p-4">
            <h2 className="lg:text-xl text-lg">{message}</h2>
            <Gap height={10} />
            <div className="flex items-center justify-between">
                <time className="lg:text-lg text-sm">{formatTimestamp(createdAt)}</time>
                <div className="flex items-center gap-2">
                    <Button className="w-12">
                        <Share2Icon className="stroke-primary-foreground" />
                    </Button>
                    <Button className="w-12">
                        <Trash2Icon className="stroke-primary-foreground" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Message;
