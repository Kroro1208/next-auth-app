"use client";

import { link } from "fs";
import { Link } from "lucide-react";
import { usePathname } from "next/navigation";

const links = [
    { name: "Home", href: "/" },
    { name: "Server", href: "/server" },
    { name: "Client", href: "/client" },
]

export const SideBar = () => {
    const pathName = usePathname();
    return (
        <div className="w-48 space-y-1">
            {links.map((link) => {
                const regex = link.href === "/" ? new RegExp(`^${link.href}$`) : new RegExp(`^${link.href}`)
                const isActive = regex.test(pathName);
                return (
                    <Link className={`flex items-center h-12 py-2 px-4 space-x-2 rounded
                    ${isActive ? "bg-gray-100" : "hover:underline"
                        }`}
                        key={link.name}
                        href={link.href}
                    >
                        <p>{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
};