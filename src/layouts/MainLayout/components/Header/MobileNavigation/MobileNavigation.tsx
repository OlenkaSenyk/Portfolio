import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { navLinks } from "../constants.ts";
import { MobileNavItem } from "./MobileNavItem.tsx";


export default function MobileNavigation({ className }: { className?: string }) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={className}>
                    <MenuIcon className="h-6 w-6" />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="data-[state=open]:slide-in-from-left duration-1000">
                <SheetHeader>
                    <SheetTitle className="text-lg">My Portfolio</SheetTitle>
                    <SheetDescription>Olena Senyk</SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-4 mt-20 px-2">
                    {navLinks.map((item) => (
                        <MobileNavItem key={item.link} title={item.title} link={item.link} />
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}