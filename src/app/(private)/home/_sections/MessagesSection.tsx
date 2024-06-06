import Message from "../_components/Message";

const MessagesSection = () => {
    return (
        <section className="grid grid-cols-2 gap-4">
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </section>
    );
};

export default MessagesSection;
