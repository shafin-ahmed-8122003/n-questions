import Divider from "@/src/components/Divider";
import Gap from "@/src/components/Gap";
import Salam from "@/src/components/Salam";
import AcceptMessageButton from "./_components/AcceptMessageButton";
import UniqueLink from "./_components/UniqueLink";
import MessagesSection from "./_sections/MessagesSection";

const HomePage = () => {
    return (
        <main className="xl:px-60 lg:px-40 px-4 py-4 flex flex-col gap-2">
            <Salam />
            <Gap height={5} />
            <UniqueLink />
            <Gap height={5} />
            <AcceptMessageButton />
            <Gap height={5} />
            <Divider />
            <Gap height={5} />
            <MessagesSection />
        </main>
    );
};

export default HomePage;
