import { useEffect, useState } from "react";
import DoughnutChart from "../charts/DoughnutChart";

export default function StockArticleData({ data, ticker }) {

    const [labels, setLabels] = useState();
    const [colors, setColors] = useState();

    useEffect(() => {
        setLabels([
            `# ${ticker}`,
            "# other tickers"
        ]);
        setColors([
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 99, 132, 0.2)"
        ]);
    }, []);


    return (
        <div>
            <div className="pb-12">
                <h1 className="text-2xl uppercase font-bold">
                    Number of mentions in articles
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-y-16 gap-x-12">
                {
                    data.providers.map((provider, index) => {
                        return <div className="max-w-xs space-y-8" key={index}>
                                    <div>
                                        <DoughnutChart 
                                            data={[provider.stock_count, provider.total_count - provider.stock_count]} 
                                            labels={labels} 
                                            colors={colors}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h1 className="uppercase font-medium pb-2">
                                            { provider.provider }
                                        </h1>
                                        <p className="text-sm text-gray-400">
                                            Percentage { ticker } hits: { ((provider.stock_count / provider.total_count) * 100).toFixed(2) + " %" }
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Number of { ticker } hits: { provider.stock_count }
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Total number of ticker hits: { provider.total_count }
                                        </p>
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
    );
}