import axios from "axios";
import { API } from "../../shared";

export default async function getStatsBaseData(setLoading, setCount, limit, setTickers) {
    setLoading(true);

    try {
        const res = await axios.get(API + `stats/?limit=${limit}`);
        setCount({
            stockCount: res.data.stock_count,
            commentCount: res.data.comment_count,
            articleCount: res.data.article_count
        });
        setTickers({
            tickers: res.data.tickers.tickers,
            total: res.data.tickers.total
        });
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}