import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import { cn } from "@/lib/utils.ts";
import { useLocation } from "react-router";

export default function Header({ className }: { className?: string }) {
    const location = useLocation();

    return (
        <div className={cn("flex justify-between items-center py-3 bg-background", className)}>
            <div className="font-bold">
                Olena Senyk | Software Engineer
            </div>
            <DesktopNavigation currentPath={location.pathname} className="hidden md:flex" />
            <MobileNavigation className="md:hidden" />
        </div>
    );
}