import type { Metadata, Viewport } from "next";
import { Urbanist } from "next/font/google";
import { Toaster } from "sonner";
import ConvexAndClerkProvider from "./ConvexAndClerkProvider";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "N-Questions",
    description: "Get to know yourself from anonymous persons",
};

export const viewport: Viewport = {
    userScalable: false,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={urbanist.className}>
                <ConvexAndClerkProvider>{children}</ConvexAndClerkProvider>
                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        classNames: {
                            toast: "bg-primary",
                            content: "text-primary-foreground",
                        },
                    }}
                />
            </body>
        </html>
    );
}
