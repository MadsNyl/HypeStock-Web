import { useEffect, useState } from "react";
import DoughnutChart from "../charts/DoughnutChart";
import MediaCard from "./MediaCard";

export default function StockArticleData({ data, ticker, days }) {

    const [labels, setLabels] = useState();
    const [colors, setColors] = useState();

    useEffect(() => {
        setLabels([
            `# ${ticker}`,
            "# other tickers"
        ]);
        setColors([
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 159, 64, 0.2)"
        ]);
    }, []);


    return (
        <div>
            <div className="pb-12">
                <h1 className="text-xl md:text-2xl uppercase font-bold">
                    Number of mentions at reddit
                </h1>
            </div>
            <div className="grid md:grid-cols-3 gap-y-4 md:gap-y-16 md:gap-x-12">
                {
                    data.subreddits.map((subreddit, index) => {
                        return <MediaCard 
                                    key={index}
                                    symbol={ticker}
                                    provider={subreddit.subreddit}
                                    totalCount={subreddit.total_count}
                                    stockCount={subreddit.stock_count}
                                    path={"comments"}
                                    days={days}
                                />
                    })
                }
            </div>
        </div>
    );
}