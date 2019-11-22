const initialState = {
  loading: false,
  newsArticle: [],
  bookMarkArticle: []
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEWS_INIT':
      return { ...state, loading: true, newsArticle: [] };
    case 'NEWS_SUCCESS':
      return { ...state, loading: false, newsArticle: action.payload };
    case 'BOOKMARK_NEWS':
      return { ...state, loading: false, bookMarkArticle: action.payload };
    default:
      return state;
  }
};
