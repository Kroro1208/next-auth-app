'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function Error({
    error, reset
}: {
    error: Error,
    reset: () => void
}) {
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(() => {
        setErrorMessage(error.message);
    }, [error]);

    return (
        <main className="flex flex-col items-center justify-center">
            <Card className="w-[560px] py-8">
                <CardHeader className="text-center space-y-4">
                    <CardTitle className="text-2xl">エラー</CardTitle>
                    <CardDescription>問題が発生しました</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="flex flex-col items-center font-bold text-red-500">{errorMessage}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button onClick={() => reset()}></Button>
                </CardFooter>
            </Card>
        </main>
    )
};

