"use client";

import Gap from "@/src/components/Gap";
import { Button } from "@/src/components/ui/button";
import { useStoreUserEffect } from "@/src/hooks/useStoreUserEffect";
import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import { LoaderIcon } from "lucide-react";
import Link from "next/link";

const AuthSection = () => {
    const { isLoading, isAuthenticated } = useStoreUserEffect();

    return (
        <section className="flex flex-col items-center w-full max-w-[300px]">
            {isLoading && (
                <div className="w-full h-full flex items-center justify-center">
                    <LoaderIcon className="animate-spin" />
                </div>
            )}

            {!isAuthenticated && !isLoading && (
                <>
                    <SignUpButton mode="modal">
                        <Button size="lg" className="w-full">
                            Get Started
                        </Button>
                    </SignUpButton>
                    <Gap height={10} />
                    <p className="text-lg text-center">
                        Already have an account?{" "}
                        <SignInButton mode="modal">
                            <Button size="link" variant="link">
                                Click here
                            </Button>
                        </SignInButton>
                    </p>
                </>
            )}

            {isAuthenticated && !isLoading && (
                <>
                    <Link href="/home" className="w-full">
                        <Button size="lg" className="w-full">
                            Start
                        </Button>
                    </Link>
                    <Gap height={10} />
                    <SignOutButton>
                        <Button size="link" variant="link">
                            Log out
                        </Button>
                    </SignOutButton>
                </>
            )}
        </section>
    );
};

export default AuthSection;
