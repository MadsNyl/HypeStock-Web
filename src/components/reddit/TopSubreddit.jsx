export default function TopSubreddit({ data }) {
    return (
        <div className="mt-8 flex items-center px-12">
            <div>
                <h1 className="text-2xl font-semibold capitalize">
                    { data?.subreddit }
                </h1>
            </div>
            <div>
                
            </div>
        </div>
    );
}