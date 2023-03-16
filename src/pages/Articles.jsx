import axios from "axios";
import React, { useEffect, useState } from "react";
import BaseArticlesInfo from "../components/articles/BaseArticlesInfo";
import BaseInfoWrapper from "../components/wrappers/BaseInfoWrapper";
import PageHeader from "../components/wrappers/PageHeader";
import PageWrapper from "../components/wrappers/PageWrapper";
import PageDataWrapper from "../components/wrappers/PageDataWrapper";
import { API } from "../shared";
import Spinner from "../components/Spinner";
import ArticleFilters from "../components/articles/ArticleFilters";

export default function Articles() {

    const [isLoading, setLoading] = useState();
    const [limit, setLimit] = useState(10);
    const [isArticleLoading, setArticleLoading] = useState();
    const [baseData, setBaseData] = useState();
    const [providers, setProviders] = useState();
    const [articles, setArticles] = useState();

    useEffect(() => {
        const getBaseData = async () => {
            setLoading(true);
            setArticleLoading(true);

            try {
                const res = await axios.get(API + `articles/base_data?limit=${limit}`);
                setBaseData({
                    article_count: res.data.article_count,
                    provider_count: res.data.provider_count
                });
                setProviders(res.data.providers);
                setArticles(res.data.articles);
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
                setArticleLoading(false);
            }
        }

        getBaseData();
    }, []);

    return (
        <>
            <PageWrapper>
                <BaseInfoWrapper>
                    <PageHeader header={"articles"} color={"emerald"} />
                    <BaseArticlesInfo isLoading={isLoading} info={baseData} />
                </BaseInfoWrapper>

                <PageDataWrapper>
                    <ArticleFilters 
                        isLoading={isLoading}
                        setLoading={setLoading}
                        isArticleLoading={isArticleLoading}
                        setArticleLoading={setArticleLoading}
                        providers={providers}
                        articles={articles}
                        setArticles={setArticles}
                        limit={limit}
                    />
                </PageDataWrapper>
            </PageWrapper>
        </>
    )
}