"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import AcceptingMessageSection from "./_sections/AcceptingMessageSection";
import LoadingSection from "./_sections/LoadingSection";
import NoUserSection from "./_sections/NoUserSection";
import NotAcceptingMessageSection from "./_sections/NotAcceptingMessageSection";

const UsersPublicPage = () => {
    const { id } = useParams();

    try {
        const user = useQuery(api.users.getSpecificUser, { userId: id as any });

        if (user) {
            if (user.isAcceptingMessage) {
                return <AcceptingMessageSection user={user} />;
            } else {
                return <NotAcceptingMessageSection user={user} />;
            }
        } else {
            return <LoadingSection />;
        }
    } catch (error) {
        return <NoUserSection />;
    }
};

export default UsersPublicPage;
