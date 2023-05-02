import ScatterChart from "../charts/ScatterChart";
import BoxDisplayWrapper from "../wrappers/BoxDisplayWrapper";


const ChartInfo = ({ title, color1, color2, score, data1, data2 }) => {
    return (
        <div className="flex items-center justify-between pb-6 px-2 md:px-6">
            <div className="max-w-xs w-full space-y-2">
                <h1 className="md:text-xl font-semibold">
                    { title }
                </h1>
                <p className="text-sm md:text-md text-gray-400">
                    Score: { score }
                </p>
            </div>
            <div className="flex items-center space-x-3 md:space-x-8">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{background: color1 }} />
                    <h1 className="text-sm md:text-md font-semibold">
                        { data1 }
                    </h1>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-4">
                        <div className="w-3 h-3 rounded-full" style={{background: color2 }} />
                    </div>
                    <h1 className="text-sm md:text-md font-semibold">
                        { data2 }
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default function StockCorrelation({ data }) {

    return (
        <div>
            <div className="pb-12">
                <h1 className="text-xl md:text-2xl uppercase font-bold">
                    Correlation
                </h1>
            </div>     
            <div className="grid md:grid-cols-2 gap-y-4 md:gap-y-16 md:gap-x-12">
                <BoxDisplayWrapper>
                    <ChartInfo 
                        score={data.correlation.price_reddit}
                        title={"Price and Reddit Mentions"}
                        data1="Price"
                        data2="Mentions"
                        color1={"rgba(75, 192, 192, 0.2)"}
                        color2={"rgba(255, 159, 64, 0.2)"}
                    />
                    <ScatterChart 
                        array1={data.tracking_info.trackings.map((item, index) => { return {y: item.last_price, x: index + 1}; })}
                        array2={data.tracking_info.reddit.map((item, index) => { return {y: item.count, x: index + 1}; })}
                    />
                </BoxDisplayWrapper>
                <BoxDisplayWrapper>
                    <ChartInfo 
                        score={data.correlation.price_articles}
                        title={"Price and Newspaper Mentions"}
                        data1="Price"
                        data2="Mentions"
                        color1={"rgba(75, 192, 192, 0.2)"}
                        color2={"rgba(255, 159, 64, 0.2)"}
                    />
                    <ScatterChart 
                        array1={data.tracking_info.trackings.map((item, index) => { return {y: item.last_price, x: index + 1}; })}
                        array2={data.tracking_info.article.map((item, index) => { return {y: item.count, x: index + 1}; })}
                    />
                </BoxDisplayWrapper>
                <BoxDisplayWrapper>
                    <ChartInfo 
                        score={data.correlation.price_likes}
                        title={"Price and Reddit Upvotes"}
                        data1="Price"
                        data2="Upvotes"
                        color1={"rgba(75, 192, 192, 0.2)"}
                        color2={"rgba(255, 159, 64, 0.2)"}
                    />
                    <ScatterChart 
                        array1={data.tracking_info.trackings.map((item, index) => { return {y: item.last_price, x: index + 1}; })}
                        array2={data.tracking_info.reddit_likes.map((item, index) => { return {y: item.count, x: index + 1}; })}
                    />
                </BoxDisplayWrapper>
                <BoxDisplayWrapper>
                    <ChartInfo 
                        score={data.correlation.price_reddit}
                        title={"Price and Total Mentions"}
                        data1="Price"
                        data2="Total Mentions"
                        color1={"rgba(75, 192, 192, 0.2)"}
                        color2={"rgba(255, 159, 64, 0.2)"}
                    />
                    <ScatterChart 
                        array1={data.tracking_info.trackings.map((item, index) => { return {y: item.last_price, x: index + 1}; })}
                        array2={data.tracking_info.mentions.map((item, index) => { return {y: item.count, x: index + 1}; })}
                    />
                </BoxDisplayWrapper>
            </div> 
        </div>
    );
}