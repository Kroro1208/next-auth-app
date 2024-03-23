import { SideBar } from "@/components/common/nav/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div>
                <SideBar />
            </div>
            <div className="w-full">{children}</div>
        </div>
    )
}