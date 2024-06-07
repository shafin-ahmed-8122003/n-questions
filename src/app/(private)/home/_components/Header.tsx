"use client";

import navbarLogo from "@/public/images/navbar_logo.svg";
import { UserButton } from "@clerk/nextjs";
import { AuthLoading, Authenticated } from "convex/react";
import { LoaderIcon } from "lucide-react";
import Image from "next/image";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-20 p-2 flex items-center z-50">
            <nav className="w-full h-full flex items-center justify-between px-4 bg-primary rounded-xl">
                <Image src={navbarLogo} alt="N-Questions Logo" width={150} />
                <AuthLoading>
                    <LoaderIcon className="animate-spin stroke-primary-foreground" />
                </AuthLoading>
                <Authenticated>
                    <UserButton />
                </Authenticated>
            </nav>
        </header>
    );
};

export default Header;
