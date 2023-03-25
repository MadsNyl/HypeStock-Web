import { useState } from "react";
import SearchField from "../components/search/SearchField";
import Stocks from "../components/search/Stocks";
import PageWrapper from "../components/wrappers/PageWrapper";

export default function Search() {

    const [isLoading, setLoading] = useState();
    const [stocks, setStocks] = useState();
    const [error, setError] = useState(false);

    return (
        <>
            <PageWrapper>
                <SearchField 
                    setLoading={setLoading}
                    setStocks={setStocks}
                    setError={setError}
                />
                <Stocks 
                    stocks={stocks}
                    isLoading={isLoading}
                    error={error}
                />
            </PageWrapper>
        </>
    );
}