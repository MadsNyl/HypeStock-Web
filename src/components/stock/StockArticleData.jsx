import MediaCard from "./MediaCard";

export default function StockArticleData({ data, ticker, days }) {
    return (
        <div>
            <div className="pb-12">
                <h1 className="text-xl md:text-2xl uppercase font-bold">
                    Number of mentions in articles
                </h1>
            </div>
            <div className="grid md:grid-cols-3 gap-y-4 md:gap-y-16 md:gap-x-12">
                {
                    data.providers.map((provider, index) => {
                        return <MediaCard 
                                    key={index} 
                                    symbol={ticker} 
                                    totalCount={provider.total_count} 
                                    stockCount={provider.stock_count} 
                                    provider={provider.provider} 
                                    path="articles" 
                                    days={days} 
                                />
                    })
                }
            </div>
        </div>
    );
}

