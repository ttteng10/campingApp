import {API} from '.';

//커뮤니티 조회
export const getCommunity = async () => {
  const res = await API.get('/community', {pageSize: 200});
  return res.data.result.content;
};

//커뮤니티 상세 조회
export const getCommunityDetail = async communityId => {
  const res = await API.get(`/community/${communityId}`);
  return res.data.result;
};

//커뮤니티 댓글 작성
export const setCommunityReply = async (communityId, reply) => {
  const res = await API.post(`/community/${communityId}/reply`, {
    reply,
  });
};

//커뮤니티 좋아요
export const setCommunityLike = async communityId => {
  const res = await API.put(`/community/${communityId}/like`);
  //   console.log(res.data.result);
  return res.data.result.id;
};

//커뮤니티 생성
export const setCommunityCreate = async (subject, content) => {
  const res = await API.post('/community', {subject, content});
  console.log(res.data);
};
