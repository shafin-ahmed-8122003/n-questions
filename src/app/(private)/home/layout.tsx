import Header from "./_components/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default HomeLayout;
