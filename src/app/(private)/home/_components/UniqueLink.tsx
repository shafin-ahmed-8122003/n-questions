import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

const UniqueLink = () => {
    return (
        <>
            <label className="text-xl">Your unique link</label>
            <div className="flex items-center h-12 relative">
                <Input
                    value={"https://n-questions.vercel.app/u/shafinahmed1512023"}
                    disabled
                    className="disabled:opacity-100 disabled:cursor-text"
                />
                <Button className="h-full rounded-l-none absolute right-0">Copy</Button>
            </div>
        </>
    );
};

export default UniqueLink;
