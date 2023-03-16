import axios from "axios";
import { API } from "../../shared";

export default async function sortByRedditFilter(setLoading, choice, limit, value, setComments, setSort) {
    setLoading(true);
    try {
        let res;
        if (choice === "all") {
            res = await axios.get(API + `reddit/${value}?limit=${limit}`);
        } else {
            res = await axios.get(API + `reddit/${value}_by_subreddit?limit=${limit}&subreddit=${choice}`)
        }

        setComments(res.data.comments);
        setSort(value);
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
}