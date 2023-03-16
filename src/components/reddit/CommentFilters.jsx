import CommentCards from "./CommentCards";
import CommentCardsLoading from "./CommentCardsLoading";
import RedditFilter from "./RedditFilter";
import RedditFilterLoading from "./RedditFilterLoading";

export default function CommentFilters({ isLoading, isCommentsLoading, setCommentsLoading, subreddits, comments, setComments, limit }) {
    return (
        <>
            {
                isLoading
                    ? <RedditFilterLoading />
                    : <RedditFilter 
                        subreddits={subreddits}
                        setLoading={setCommentsLoading}
                        limit={limit}
                        setComments={setComments}
                    />
            }
            {
                isCommentsLoading
                    ? <CommentCardsLoading length={limit} />
                    : <CommentCards comments={comments} />
            }
        </>
    );
}