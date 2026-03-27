import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";
import { navLinks } from "../constants.ts";
import DesktopNavItem from "./DesktopNavItem.tsx";

export default function DesktopNavigation({ currentPath, className }: { currentPath: string, className?: string }) {
    return (
        <NavigationMenu className={className}>
            <NavigationMenuList className="flex justify-between gap-2">
                {navLinks.map((item) => (
                    <DesktopNavItem
                        key={item.link}
                        title={item.title}
                        link={item.link}
                        isActive={item.link === currentPath}
                    />
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    );
}