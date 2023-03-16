import axios from "axios";
import { API } from "../../shared";

export default async function sortBySubreddit(subreddit, setLoading, sort, limit, setComments, setChoice) {
    setLoading(true);
    try {
        let res;

        if (subreddit === "all") {
            res = await axios.get(API + `reddit/${sort}?limit=${limit}`);
        } else {
            res = await axios.get(API + `reddit/${sort}_by_subreddit?limit=${limit}&subreddit=${subreddit}`);
        }

        setComments(res.data.comments);
        setChoice(subreddit);
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
    }
} 