"use client";

import { api } from "@/convex/_generated/api";
import Divider from "@/src/components/Divider";
import Gap from "@/src/components/Gap";
import Salam from "@/src/components/Salam";
import { useQuery } from "convex/react";
import AcceptMessageButton from "./_components/AcceptMessageButton";
import UniqueLink from "./_components/UniqueLink";
import MessagesSection from "./_sections/MessagesSection";

const HomePage = () => {
    const currentUser = useQuery(api.users.currentUser);

    return (
        <main className="xl:px-60 lg:px-40 px-4 py-4 flex flex-col gap-2">
            {currentUser && <Salam name={currentUser?.name} />}
            <Gap height={5} />
            <UniqueLink />
            <Gap height={5} />
            {currentUser && <AcceptMessageButton user={currentUser} />}
            <Gap height={5} />
            <Divider />
            <Gap height={5} />
            <MessagesSection />
        </main>
    );
};

export default HomePage;
