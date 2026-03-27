import { NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu.tsx";
import { NavLink } from "react-router";
import type { NavItemProps } from "../types.ts";
import { cn } from "@/lib/utils.ts";

export default function DesktopNavItem({ title, link, isActive }: NavItemProps) {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <NavLink to={link} className={cn("text-sm", isActive && "bg-secondary dark:bg-primary")}>
                    {title}
                </NavLink>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}