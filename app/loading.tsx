export default function Loading() {
    return (
        <div className="my-16 flex flex-col space-y-12 items-center justify-center">
            <div
                className="h-24 w-24 animate-spin rounded-full border-[10px] border-gray-500 border-t-transparent"
            />
            <div className="text-gray-700 text-xl">Loading</div>
        </div>
    )
}