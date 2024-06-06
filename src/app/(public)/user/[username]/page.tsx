import Salam from "@/src/components/Salam";
import { Button } from "@/src/components/ui/button";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";

const UsersPublicPage = () => {
    return (
        <main className="xl:px-60 lg:px-40 px-4 py-4 h-full">
            <section className="flex flex-col justify-center h-full gap-4">
                <Salam />
                <div className="flex flex-col w-full gap-2">
                    <Label className="text-lg" htmlFor="message">
                        Send Anonymous Message to @shafinahmed1512023
                    </Label>
                    <Textarea placeholder="Type your message here." id="message" />
                    <Button size="lg" className="w-min md:w-1/3 self-end">
                        Send message
                    </Button>
                </div>
            </section>
        </main>
    );
};

export default UsersPublicPage;
