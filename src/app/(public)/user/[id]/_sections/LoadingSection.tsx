import { LoaderIcon } from "lucide-react";

const LoadingSection = () => {
    return (
        <main className="w-full h-full flex flex-col items-center justify-center">
            <LoaderIcon className="animate-spin" />
        </main>
    );
};

export default LoadingSection;
