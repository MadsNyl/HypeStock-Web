import React from "react";
import ContentBox from "./ContentBox";

export default function Content({ content }) {
    return (
        <div className="">
            <div className="grid grid-cols-2 place-items-center">
                <ContentBox content={content?.reddit_stock_likes} title={"Stock with most likes on Reddit"} comparison={content?.reddit_stock_likes_comparison} />
                <ContentBox content={content?.twitter_stock_likes} title={"Stock with most likes on Twitter"} />
            </div>
        </div>
    );
}