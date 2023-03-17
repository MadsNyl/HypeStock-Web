import React, { useEffect, useState } from "react";
import getHomeBaseData from "../api/home/HomeBaseData";
import Info from "../components/home/Info";
import Latest from "../components/home/Latest";
import Results from "../components/home/Results";
import Welcome from "../components/home/Welcome";


export default function Home() {

    const [loading, setLoading] = useState();
    const [data, setData] = useState();
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        getHomeBaseData(setLoading, setData, limit);
    }, []);

    return(
        <>
            <Welcome count={data?.stock_count} />
            <Info />
            <Latest articles={data?.articles} comments={data?.reddit_comments} />
            {/* <Results /> */}
        </>
    );
}