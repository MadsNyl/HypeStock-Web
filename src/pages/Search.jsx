import { useState } from "react";
import SearchField from "../components/search/SearchField";
import Stocks from "../components/search/Stocks";
import PageWrapper from "../components/wrappers/PageWrapper";

export default function Search() {

    const [isLoading, setLoading] = useState();
    const [stocks, setStocks] = useState();

    return (
        <>
            <PageWrapper>
                <SearchField 
                    setLoading={setLoading}
                    setStocks={setStocks}
                />
                <Stocks 
                    stocks={stocks}
                    isLoading={isLoading}
                />
            </PageWrapper>
        </>
    );
}