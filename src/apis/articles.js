import {API} from '.';

//아티클 리스트 가져오기
export const getArticles = async sortType => {
  const res = await API.get('/article', {
    sortType,
  });
  return res;
};

//아티클 상세
export const getArticleDetail = async id => {
  const res = await API.get(`/article/${id}`);
  return res;
};
