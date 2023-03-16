import axios from "axios";
import { API } from "../../shared";

export default async function getRedditBaseData(setLoading, setCommentsLoading, setBaseData, setSubredditData, setSubreddits, setComments, limit) {
    setLoading(true);
    setCommentsLoading(true);

    try {
        const res = await axios.get(API + `reddit?limit=${limit}`);
        setBaseData({
            comment_count: res.data.comment_count,
            subreddit_count: res.data.subreddit_count
        });
        setSubredditData({
            subreddit: res.data.top_subreddit.subreddit,
            distinct_symbols: res.data.top_subreddit.distinct_symbols,
            comment_count: res.data.top_subreddit.comment_count,
            top_stock: res.data.top_subreddit.top_stock,
            stock_count: res.data.top_subreddit.stock_count
        })
        const subreddits = ["all", ...res.data.subreddits];
        setSubreddits(subreddits);
        setComments(res.data.comments);
    } catch (e) {
        console.log(e);
    } finally {
        setLoading(false);
        setCommentsLoading(false);
    }
}