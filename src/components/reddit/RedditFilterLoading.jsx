export default function RedditFilterLoading() {
    return (
        <div className="flex justify-between items-center pb-16">
            <div className="px-6 py-3 max-w-lg w-full rounded-md bg-gray-100 border border-gray-100 animate-pulse">
                <div className="py-4 rounded-md bg-gray-50" />
            </div>
            <div className="flex items-center space-x-12 max-w-xl w-full">
                <div className="px-6 py-3 max-w-xs w-full rounded-md bg-gray-100 border border-gray-100 animate-pulse">
                    <div className="py-4 rounded-md bg-gray-50" />
                </div>
                <div className="px-6 py-3 max-w-xs w-full rounded-md bg-gray-100 border border-gray-100 animate-pulse">
                    <div className="py-4 rounded-md bg-gray-50" />
                </div>
            </div>
        </div>
    );
}