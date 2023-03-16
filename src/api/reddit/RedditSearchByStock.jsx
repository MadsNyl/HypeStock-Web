import axios from "axios";
import { API } from "../../shared";

export default async function searchRedditByStock(e, setLoading, limit, setComments, setChoice, setSort) {
    e.preventDefault();
    setLoading(true);
    const search = e.target[0].value;

    try {
        const res = await axios.get(API + `reddit/stock_search?limit=${limit}&stock=${search}`);
        
        setComments(res.data.comments);
        setChoice("all");
        setSort("latest");
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}