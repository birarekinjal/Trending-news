const axios = require('axios');
const API = 'https://newsapi.org/v2/top-headlines';
const APIKey = '226439694ab54c6d9620a50d36c22b49';
export const fetchNewsInit = () => ({
    type: 'NEWS_INIT'
});
export function newsAction(name,cat) {
   return function(dispatch) {
     dispatch(fetchNewsInit());
     let parm = '';
     if(name === "bbcNews"){
       
          parm = `${API}?source=bbc-news&category=${cat}&apiKey=${APIKey}`;
     }else{
           parm = `${API}?country=${name}&apiKey=${APIKey}`
     }
     return axios.get(parm)
     .then(({ data }) => {
       dispatch(fetchNewsSuccess(data.articles));
     });
  };
}
export const fetchNewsSuccess = (newsData) => ({
      type : 'NEWS_SUCCESS',
      payload : newsData
});