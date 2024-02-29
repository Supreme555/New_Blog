import { API_ARTICLES, SEARCH } from "./index";

const initialState = {
    articles: [],
    filters: {
        minPrice: '',
        maxPrice: '',
        title: '',
        publicationDate: '',
    },
};

const ArticlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {...state, filters: action.payload.filters}
        case API_ARTICLES:
            return {...state, articles: action.payload.articles};
        default:
            return state;
    }
};

export default ArticlesReducer;
