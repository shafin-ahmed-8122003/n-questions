"use client";

import { useConvexAuth } from "convex/react";
import { LoaderIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "sonner";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated, isLoading } = useConvexAuth();

    if (isLoading) {
        return (
            <main className="w-full h-full flex items-center justify-center">
                <LoaderIcon className="animate-spin" />
            </main>
        );
    }

    if (!isAuthenticated && !isLoading) {
        toast("Please login first!");
        redirect("/");
    }

    if (isAuthenticated && !isLoading) {
        return <>{children}</>;
    }
};

export default PrivateLayout;
