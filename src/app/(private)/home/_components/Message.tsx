import { Button } from "@/src/components/ui/button";
import { Share2Icon, Trash2Icon } from "lucide-react";

const Message = () => {
    return (
        <div className="w-full h-[150px] border-2 border-primary rounded-lg flex flex-col justify-between p-4">
            <h2 className="text-xl">Do you know that you are a dog?</h2>
            <div className="flex items-center justify-between">
                <time>Jun 6, 2024 10:06 AM</time>
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
