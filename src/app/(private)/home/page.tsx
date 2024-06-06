import Divider from "@/src/components/Divider";
import Gap from "@/src/components/Gap";
import AcceptMessageButton from "./_components/AcceptMessageButton";
import UniqueLink from "./_components/UniqueLink";
import MessagesSection from "./_sections/MessagesSection";

const HomePage = () => {
    return (
        <main className="px-60 py-4 flex flex-col gap-2">
            <h2 className="text-2xl">Peach Be Upon You, Shafin</h2>
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
