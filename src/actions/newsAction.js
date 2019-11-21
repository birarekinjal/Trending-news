const axios = require('axios');
const API = 'https://newsapi.org/v2/';
const APIKey = '226439694ab54c6d9620a50d36c22b49';
export const fetchNewsInit = () => ({
    type: 'NEWS_INIT'
});
export function newsAction(name,cat,language) {
   return function(dispatch) {
     dispatch(fetchNewsInit());
     let parm = '';
     if(name === "bbcNews"){
            parm = `${API}top-headlines?category=${cat}&apiKey=${APIKey}`; 
     }else{
           parm = `${API}top-headlines?country=${name}&language=${language}&apiKey=${APIKey}`
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
export function searchNews(value){
   return function(dispatch){
    dispatch(fetchNewsInit());
    return axios.get(`${API}everything?q=${value}&apiKey=${APIKey}`)
      .then(({ data }) => {
       dispatch(fetchNewsSuccess(data.articles));
     });
    }
}