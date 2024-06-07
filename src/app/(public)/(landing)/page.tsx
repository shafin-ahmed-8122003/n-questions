import landingLogo from "@/public/images/landing_logo.svg";
import Gap from "@/src/components/Gap";
import Image from "next/image";
import AuthSection from "./_sections/AuthSection";

const LandingPage = () => {
    return (
        <main className="h-full flex flex-col items-center justify-center p-8">
            <div className="flex flex-col justify-center items-center">
                <Image src={landingLogo} alt="N-Questions Logo" width={400} priority />
                <p className="font-medium text-xl text-center">
                    Get to know yourself from anonymous persons
                </p>
                <Gap height={30} />
                <AuthSection />
            </div>
        </main>
    );
};

export default LandingPage;
