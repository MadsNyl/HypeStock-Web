export default function BaseCommentsInfo({ info, isLoading }) {

    const InfoBox = ({data, description}) =>  {return (
        <div className="text-center space-y-4">
            <h1 className="font-extrabold text-2xl text-orange-500">
                { data }
            </h1>
            <h1 className="text-gray-500 font-semibold">
                { description }
            </h1>
        </div>
    )};
    
    return(
        <div className="flex items-center space-x-12">
            <InfoBox 
                data={isLoading ? 0 : info?.comment_count}
                description={"Number of comments"} 
            />
            <InfoBox 
                data={isLoading ? 0 : info?.subreddit_count}
                description={"Number of subreddits"} 
            />
        </div>
    )
}