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
                <h1 className="text-2xl uppercase font-bold">
                    Number of mentions at reddit
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-y-16 gap-x-12">
                {
                    data.subreddits.map((subreddit, index) => {
                        // return <div className="max-w-xs space-y-8" key={index}>
                        //             <div>
                        //                 <DoughnutChart 
                        //                     data={[subreddit.stock_count, subreddit.total_count - subreddit.stock_count]} 
                        //                     labels={labels} 
                        //                     colors={colors}
                        //                 />
                        //             </div>
                        //             <div className="text-center">
                        //                 <h1 className="uppercase font-medium pb-2">
                        //                     { subreddit.subreddit }
                        //                 </h1>
                        //                 <p className="text-sm text-gray-400">
                        //                     Percentage { ticker } hits: { ((subreddit.stock_count / subreddit.total_count) * 100).toFixed(2) + " %" }
                        //                 </p>
                        //                 <p className="text-sm text-gray-400">
                        //                     Number of { ticker } hits: { subreddit.stock_count }
                        //                 </p>
                        //                 <p className="text-sm text-gray-400">
                        //                     Total number of ticker hits: { subreddit.total_count }
                        //                 </p>
                        //             </div>
                        //         </div>
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