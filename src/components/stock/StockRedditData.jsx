import { useEffect, useState } from "react";
import PieChart from "../charts/PieChart";

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
            <div className="grid grid-cols-4 gap-y-8">
                {
                    data.providers.map((provider, index) => {
                        return <div className="max-w-md space-y-8" key={index}>
                                    <PieChart 
                                        data={[provider.stock_count, provider.total_count - provider.stock_count]} 
                                        labels={labels} 
                                        colors={colors}
                                    />
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