import { NavLink } from "react-router";
import { Button } from "@/components/ui/button.tsx";
import type { NavItemProps } from "../types.ts";
import { SheetClose } from "@/components/ui/sheet.tsx";

export function MobileNavItem({ title, link }: NavItemProps) {
    return (
        <SheetClose asChild>
            <Button variant="secondary" asChild>
                <NavLink
                    key={title}
                    to={link}
                >
                    {title}
                </NavLink>
            </Button>
        </SheetClose>
    );
}