"use client";
import { useSearchParams } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { useEffect } from "react";

const errorMessages = {
    OAuthAccountNotLinked: "このメールアドレスは別のログイン方法で既に登録されています。以前に使用したログイン方法をお試しください。"
};

export const ErrorToaster = () => {
    const searchParams = useSearchParams(); // クエリパラメータにアクセスするため
    const error = searchParams.get("error");
    const { toast } = useToast();

    useEffect(() => {
        if (error) {
            const errorMessage = errorMessages[error as keyof typeof errorMessages] || "エラーが発生しました";
            toast({
                variant: "destructive",
                title: errorMessage
            });
        }
    }, [error, toast]);

    return null;
}