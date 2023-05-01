import ScatterChart from "../charts/ScatterChart";
import BoxDisplayWrapper from "../wrappers/BoxDisplayWrapper";
import PearsonCorrelationInfo from "./PearsonCorrelationInfo";

export default function StockCorrelation({ data }) {

    return (
        <div>
            <div className="pb-12">
                <h1 className="text-2xl uppercase font-bold">
                    Correlation
                </h1>
            </div>     
            <div className="grid grid-cols-2 gap-y-16 gap-x-12">
                <BoxDisplayWrapper>
                    <div className="flex items-center justify-between py-6 px-6">
                        <div className="max-w-xs w-full space-y-2">
                            <h1 className="text-xl font-semibold">
                                Price and Reddit Mentions
                            </h1>
                            <p className="text-gray-400 text-sm">
                                The correlation between price and mentions from Reddit for each day.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-3 h-3 rounded-full bg-blue-200" />
                                <h1 className="font-semibold">
                                    Price
                                </h1>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="w-3 h-3 rounded-full bg-blue-200" />
                                <h1 className="font-semibold">
                                    Mentions
                                </h1>
                            </div>
                        </div>
                    </div>
                    <ScatterChart 
                        array1={data.tracking_info.trackings.map((item, index) => { return {y: item.last_price, x: index + 1}; })}
                        array2={data.tracking_info.reddit.map((item, index) => { return {y: item.count, x: index + 1}; })}
                    />
                </BoxDisplayWrapper>
                <BoxDisplayWrapper>
                    <ScatterChart 
                        array1={data.tracking_info.trackings.map((item, index) => { return {y: item.last_price, x: index + 1}; })}
                        array2={data.tracking_info.article.map((item, index) => { return {y: item.count, x: index + 1}; })}
                    />
                </BoxDisplayWrapper>
                <BoxDisplayWrapper>
                    <ScatterChart 
                        array1={data.tracking_info.trackings.map((item, index) => { return {y: item.last_price, x: index + 1}; })}
                        array2={data.tracking_info.reddit_likes.map((item, index) => { return {y: item.count, x: index + 1}; })}
                    />
                </BoxDisplayWrapper>
                <BoxDisplayWrapper>
                    <ScatterChart 
                        array1={data.tracking_info.trackings.map((item, index) => { return {y: item.last_price, x: index + 1}; })}
                        array2={data.tracking_info.mentions.map((item, index) => { return {y: item.count, x: index + 1}; })}
                    />
                </BoxDisplayWrapper>
            </div> 
        </div>
    );
}