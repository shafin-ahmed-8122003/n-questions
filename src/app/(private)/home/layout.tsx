import Gap from "@/src/components/Gap";
import Header from "./_components/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <Gap height={80} />
            {children}
        </>
    );
};

export default HomeLayout;
