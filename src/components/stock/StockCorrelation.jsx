import PearsonCorrelationInfo from "./PearsonCorrelationInfo";

export default function StockCorrelation({ data }) {

    return (
        <div>
            <div className="pb-12">
                <h1 className="text-2xl uppercase font-bold">
                    Correaltion
                </h1>
            </div>     
            <div className="grid grid-cols-3 gap-y-16 gap-x-12">
                <PearsonCorrelationInfo 
                    x={data.tracking_info.trackings.map(tracking => { return tracking.last_price; }).reverse()}
                    y={data.tracking_info.reddit.map(reddit => { return reddit.count })}
                    text="Reddit mentions and price"
                />
                <PearsonCorrelationInfo 
                    x={data.tracking_info.trackings.map(tracking => { return tracking.last_price; }).reverse()}
                    y={data.tracking_info.reddit_likes.map(reddit => { return reddit.likes })}
                    text="Reddit upvotes and price"
                />
                <PearsonCorrelationInfo 
                    x={data.tracking_info.trackings.map(tracking => { return tracking.last_price; }).reverse()}
                    y={data.tracking_info.article.map(article => { return article.count })}
                    text="Reddit upvotes and price"
                />
            </div> 
        </div>
    );
}