import axios from "axios";
import { API } from "../../shared";

export default async function getStockBasedata(symbol, days, setStock, setData, setLoading) {
    setLoading(true);

    try {
        const query = symbol.replace("&", "%26");
        const res = await axios.get(API + `stock/?stock=${query}&days=${days}`);

        setStock(res.data.stock_info);
        setData({
            providers: res.data.providers,
            subreddits: res.data.subreddits,
            article_count: res.data.article_info.article_count,
            tracking_info: res.data.tracking_info
        }); 
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}