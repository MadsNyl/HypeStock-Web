import BaseInfoWrapper from "../components/wrappers/BaseInfoWrapper";
import PageWrapper from "../components/wrappers/PageWrapper";
import PageHeader from "../components/wrappers/PageHeader";
import { useEffect, useState } from "react";
import BaseCommentsInfo from "../components/reddit/BaseCommentsInfo";
import PageDataWrapper from "../components/wrappers/PageDataWrapper";
import CommentFilters from "../components/reddit/CommentFilters";
import getRedditBaseData from "../api/reddit/RedditBaseData";
import PageSubHeader from "../components/wrappers/PageSubHeader";
import TopSubreddit from "../components/reddit/TopSubreddit";

export default function Reddit() {

    const [isLoading, setLoading] = useState();
    const [limit, setLimit] = useState(10);
    const [isCommentsLoading, setCommentsLoading] = useState();
    const [baseData, setBaseData] = useState();
    const [subredditData, setSubredditData] = useState();
    const [subreddits, setSubreddits] = useState();
    const [comments, setComments] = useState();

    useEffect(() => {
        getRedditBaseData(
            setLoading, 
            setCommentsLoading, 
            setBaseData, 
            setSubredditData,
            setSubreddits, 
            setComments,
            limit
        );
    }, []);

    return (
        <>
            <PageWrapper>
                <BaseInfoWrapper>
                    <PageHeader header={"reddit"} color={"orange"} />
                    <BaseCommentsInfo isLoading={isLoading} info={baseData} />
                </BaseInfoWrapper>

                <PageDataWrapper border={true}>
                    <PageSubHeader header={"subreddit of the week"} color={"black"} />
                    <TopSubreddit data={subredditData} /> 
                </PageDataWrapper>
                
                <PageDataWrapper border={false}>
                    <CommentFilters
                        isLoading={isLoading}
                        isCommentsLoading={isCommentsLoading}
                        setCommentsLoading={setCommentsLoading}
                        subreddits={subreddits}
                        comments={comments}
                        setComments={setComments}
                        limit={limit}
                    />
                </PageDataWrapper>
            </PageWrapper>
        </>
    );
}