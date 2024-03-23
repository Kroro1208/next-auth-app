import { getAuthSession } from "@/lib/nextauth"

const page = async () => {
    const session = await getAuthSession();
    if (session == null) {
        return <div>session === null</div>;
    }

    const user = session.user;
    if (user === undefined) {
        return <div>user === undefined</div>;
    }

    return (
        <div>
            <div>サーバーサイド</div>
            <div>
                {Object.entries(user).map(([key, value], index) => (
                    <div key={index}>
                        <strong>{key}:</strong>{value?.toString()}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;