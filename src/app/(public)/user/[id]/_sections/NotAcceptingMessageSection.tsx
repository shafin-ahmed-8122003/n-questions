const NotAcceptingMessageSection = ({ user }: { user: any }) => {
    return (
        <main className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-center">
                Sorry! You cannot send message to {user.name} now! <br /> Because he is not
                accepting message right now!
            </h1>
        </main>
    );
};

export default NotAcceptingMessageSection;
