import {create} from 'apisauce';
import axios from 'axios';

// const apiClient = axios.create({
//   baseURL: 'https://apis.data.go.kr/B551011/GoCamping',
//   timeout: 10000,
// });

// const API_KEY =
//   'nleLiHNGgDlto8YaOsbArk9nUK6sifjqBw7glqh4YBMl%2BhHRj1gTAXI1CkBJcseuGW6PDIm2Po2TqCK5Up2S3Q%3D%3D';

// export const fetchCampingData = async () => {
//   try {
//     const response = await apiClient.get('/basedList', {
//       params: {
//         numOfRows: 5,
//         pageNo: 1,
//         MobileOS: 'IOS',
//         MobileApp: 'CampingApp',
//         serviceKey: API_KEY,
//         _type: 'json',
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching camping data:', error);
//     throw error;
//   }
// };
const baseURL = 'https://apis.data.go.kr/B551011/GoCamping';
// const baseURL = 'apis.data.go.kr/B551011/GoCamping';

const API = create({
  baseURL,
  withCredentials: true,
  headers: {Accept: 'application/json'},
});
export const GetBaseList = async () => {
  try {
    const params = {
      numOfRows: 5, // 한 페이지 결과 수
      pageNo: 1, // 페이지 번호
      MobileOS: 'IOS', // OS 구분
      MobileApp: 'CAMPING', // 서비스명 (어플명)
      serviceKey:
        'nleLiHNGgDlto8YaOsbArk9nUK6sifjqBw7glqh4YBMl+hHRj1gTAXI1CkBJcseuGW6PDIm2Po2TqCK5Up2S3Q==', // 인증키 (서비스키)
      _type: 'json', // 응답 메시지 형식
    };

    // GET 요청
    const response = await API.get('/basedList', params);

    // 응답 처리
    if (response.ok) {
      console.log(response.data);
    } else {
      throw new Error(response.problem);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export const campingApi = async () => {
  const res = await API.get('/basedList', {
    numOfRows: 10,
    pageNo: 1,
    MobileOS: 'IOS',
    MobileApp: 'CampingApp',
    serviceKey:
      // 'nleLiHNGgDlto8YaOsbArk9nUK6sifjqBw7glqh4YBMl+hHRj1gTAXI1CkBJcseuGW6PDIm2Po2TqCK5Up2S3Q==',
      'nleLiHNGgDlto8YaOsbArk9nUK6sifjqBw7glqh4YBMl%2BhHRj1gTAXI1CkBJcseuGW6PDIm2Po2TqCK5Up2S3Q%3D%3D',
    _type: 'json',
  });
  if (!res.ok) {
    console.error('API call failed:', res);
  } else {
    console.log('camping data: ' + JSON.stringify(res.data));
  }
};
