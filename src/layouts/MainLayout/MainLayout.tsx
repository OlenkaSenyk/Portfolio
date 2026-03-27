import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

export default function MainLayout() {
    return (
        <div className="min-h-svh flex flex-col w-full bg-mesh bg-fixed">
            <Header className="px-5 lg:px-10 xl:px-40" />
            <main className="py-5 md:py-10 flex-grow">
                <Outlet />
                <Toaster />
            </main>
            <Footer className="px-5 lg:px-10 xl:px-40" />
        </div>
    );
}