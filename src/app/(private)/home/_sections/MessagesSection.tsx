import Message from "../_components/Message";

const MessagesSection = () => {
    return (
        <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
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
