import navbarLogo from "@/public/images/navbar_logo.svg";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";

const Header = () => {
    return (
        <header className="h-20 p-2 flex items-center">
            <nav className="w-full h-full flex items-center justify-between px-4 bg-primary rounded-xl">
                <Image src={navbarLogo} alt="N-Questions Logo" width={150} />
                <Button variant="primaryOutline">Logout</Button>
            </nav>
        </header>
    );
};

export default Header;
