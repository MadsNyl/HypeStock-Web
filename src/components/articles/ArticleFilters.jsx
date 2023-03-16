import Providers from "./Providers";
import ArticleCards from "./ArticleCards";
import ArticleCardsLoading from "./ArticleCardsLoading";

export default function ArticleFilters({ isLoading, isArticleLoading, setArticleLoading, providers, articles, setArticles, limit }) {
    return (
        <>
            {
                isLoading
                    ? <></>
                    : <Providers 
                        providers={providers} 
                        setLoading={setArticleLoading} 
                        limit={limit} 
                        setArticles={setArticles}
                    />
            }
            {
                isArticleLoading
                    ? <ArticleCardsLoading length={limit} />
                    : <ArticleCards 
                        articles={articles} 
                    />
            }
        </>
    );
}