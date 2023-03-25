import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import getStockBasedata from "../api/stock/StockBaseData";
import LinearCorrelation from "../components/functions/Correlation";
import FormatDate from "../components/functions/FormatDate";
import { LineChart } from "../components/LineChart";
import Spinner from "../components/Spinner";
import StockInfo from "../components/stock/StockInfo";
import BaseInfoWrapper from "../components/wrappers/BaseInfoWrapper";
import PageHeader from "../components/wrappers/PageHeader";
import PageWrapper from "../components/wrappers/PageWrapper";
import PageDataWrapper from "../components/wrappers/PageDataWrapper";
import StockArticleData from "../components/stock/StockArticleData";
import StockRedditData from "../components/stock/StockRedditData";
import StockCorrelation from "../components/stock/StockCorrelation";
import StockStatus from "../components/stock/StockStatus";

export default function Stock() {

    const { symbol } = useParams();
    const [isLoading, setLoading] = useState();
    const [days, setDays] = useState(30);
    const [stock, setStock] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        getStockBasedata(
            symbol, 
            days, 
            setStock, 
            setData, 
            setLoading
        )
        console.log(data)
    }, []);


    return (
        <>
            <PageWrapper>
                <BaseInfoWrapper>
                    {
                        !isLoading && data
                            ? <StockInfo stock={stock} data={data} days={days} setStock={setStock} setData={setData} setLoading={setLoading} setDays={setDays} /> 
                            : <></>
                    }
                </BaseInfoWrapper>

                <PageDataWrapper border={true}>
                    {
                        !isLoading && data
                            ? <StockStatus data={data} days={days} />
                            : <></>
                    }
                </PageDataWrapper>

                <PageDataWrapper border={true}>
                    {
                        !isLoading && data
                            ? <StockCorrelation data={data} />
                            : <></>
                    }
                </PageDataWrapper>
                
                <PageDataWrapper border={true}>
                        {
                            !isLoading && data    
                                ? <StockArticleData data={data} ticker={stock.symbol} days={days} />
                                : <></>
                        }
                </PageDataWrapper>

                <PageDataWrapper>
                        {
                            !isLoading && data    
                                ? <StockRedditData data={data} ticker={stock.symbol} days={days} />
                                : <></>
                        }
                </PageDataWrapper>
            </PageWrapper>
        </>
    );
}