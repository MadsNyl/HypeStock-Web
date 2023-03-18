import axios from "axios";
import { API } from "../../shared";

export default async function getHomeBaseData(setLoading, setData, limit, setLatest) {
    setLoading(true);

    try {
        const res = await axios.get(API + `?limit=${limit}`);
        setData({
            stock_count: res.data.stock_count,
            articles: res.data.latest_articles,
            reddit_comments: res.data.latest_reddit_comments
        });
        setLatest(res.data.latest_articles.concat(res.data.latest_reddit_comments).sort((a, b) => a.created_date > b.created_date ? -1 : 1))
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}