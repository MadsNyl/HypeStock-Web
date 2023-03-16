export default function BaseArticlesInfo({ info, isLoading }) {

    const InfoBox = ({data, description}) =>  {return (
        <div className="text-center space-y-4">
            <h1 className="font-extrabold text-2xl text-emerald-500">
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
                data={isLoading ? 0 : info?.article_count}
                description={"Number of articles"} 
            />
            <InfoBox 
                data={isLoading ? 0 : info?.provider_count}
                description={"Number of providers"} 
            />
        </div>
    )
}