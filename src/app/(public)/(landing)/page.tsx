import landingLogo from "@/public/images/landing_logo.svg";
import Gap from "@/src/components/Gap";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

const LandingPage = () => {
    return (
        <main className="h-full flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center">
                <Image src={landingLogo} alt="N-Questions Logo" width={400} priority />
                <p className="font-medium text-xl">Get to know yourself from anonymous persons</p>
                <Gap height={30} />
                <Button size="lg" className="w-[300px]">
                    Get Started
                </Button>
                <Gap height={10} />
                <p className="text-lg">
                    Already have an account?{" "}
                    <Button size="link" variant="link">
                        Click here
                    </Button>
                </p>
            </div>
        </main>
    );
};

export default LandingPage;
