import { SideBar } from "@/components/common/SideBar";

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