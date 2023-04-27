import PearsonCorrelationInfo from "./PearsonCorrelationInfo";

export default function StockCorrelation({ data }) {

    return (
        <div>
            <div className="pb-12">
                <h1 className="text-2xl uppercase font-bold">
                    Correlation
                </h1>
            </div>     
            <div className="grid grid-cols-3 gap-y-16 gap-x-12">
                <PearsonCorrelationInfo 
                    x={data.tracking_info.trackings.map(tracking => { return tracking.last_price; }).reverse()}
                    y={data.tracking_info.reddit.map(reddit => { return reddit.count })}
                    text="The correleation between the frequence of mentions and price."
                    tag={"Reddit"}
                />
                <PearsonCorrelationInfo 
                    x={data.tracking_info.trackings.map(tracking => { return tracking.last_price; }).reverse()}
                    y={data.tracking_info.reddit_likes.map(reddit => { return reddit.likes })}
                    text="The correleation between upvotes from redditors and price."
                    tag={"Reddit"}
                />
                <PearsonCorrelationInfo 
                    x={data.tracking_info.trackings.map(tracking => { return tracking.last_price; }).reverse()}
                    y={data.tracking_info.article.map(article => { return article.count })}
                    text="The correleation between the frequence of mentions and price."
                    tag={"Article"}
                />
            </div> 
        </div>
    );
}