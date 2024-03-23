"use client";

import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const page = () => {
    const [user, setUser] = useState<Session["user"] | undefined>(undefined);
    const { data: session, status } = useSession();

    // useSessionはNextAuthのフックで、クライアントサイドでSessionを取得・管理
    // data: 現在のセッション情報。ユーザー情報が含まれる
    // status: セッションの状態（"loading", "authenticated", "unauthenticated"）
    useEffect(() => {
        setUser(session?.user ?? undefined);
    }, [session?.user]);

    if (user == undefined) {
        if (status === "loading") return <div>Loading</div>;
        return <div>user === undefined</div>;
    }

    return (
        <div className="px-12">
            <div>クライアントサイド</div>
            <div>
                {Object.entries(user).map(([key, value], index) => (
                    <div key={index}>
                        <strong>{key}:</strong>{value?.toString()}
                    </div>
                ))}
            </div>
        </div>
    );
}
