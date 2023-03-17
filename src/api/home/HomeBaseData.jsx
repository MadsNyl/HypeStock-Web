import axios from "axios";
import { API } from "../../shared";

export default async function getHomeBaseData(setLoading, setData, limit) {
    setLoading(true);

    try {
        const res = await axios.get(API + `?limit=${limit}`);
        setData({
            stock_count: res.data.stock_count,
            articles: res.data.latest_articles,
            reddit_comments: res.data.latest_reddit_comments
        });
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}