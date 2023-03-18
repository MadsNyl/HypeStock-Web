import { useEffect, useState } from "react";
import getTrendingData from "../api/trending/TrendingData";
import TrendingData from "../components/trending/TrendingData";
import PageHeader from "../components/wrappers/PageHeader";
import PageWrapper from "../components/wrappers/PageWrapper";

export default function Trending() {

    const [isLoading, setLoading] = useState();
    const [data, setData] = useState();
    const [limit, setLimit] = useState(3);

    useEffect(() => {
        getTrendingData(setLoading, setData, limit);
    }, []);

    return (
        <>
            <PageWrapper>
                <div className="flex justify-center">
                    <PageHeader header={"trending in social media"} />
                </div>
                {
                    !data
                        ? <></>
                        : 
                        <>
                            <TrendingData header={"This week"} data={data.week} />
                            <TrendingData header={"This month"} data={data.month} />
                            <TrendingData header={"Total"} data={data.total} />
                        </>
                }
            </PageWrapper>
        </>
    );
}