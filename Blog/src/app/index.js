export const API_ARTICLES = 'API_ARTICLES'
export const SEARCH = 'SEARCH'


export const apiArticles = (articles) => ({
    type: API_ARTICLES,
    payload: {articles},
});

export const search = (filters) => ({
    type: SEARCH,
    payload: {filters},
});