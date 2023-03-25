import axios from "axios";
import { API } from "../../shared";

export default async function getStockArticles(limit, setArticles, setData, setLoading, symbol, days, provider, setCount) {
    setLoading(true);

    try {
        const res = await axios.get(API + `articles/articles?stock=${symbol}&limit=${limit}&days=${days}&provider=${provider}`);
        setArticles(res.data.articles);
        setData(res.data.stats);
        setCount(res.data.count);
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}