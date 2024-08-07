import {create} from 'apisauce';

const baseURL = 'http://13.209.27.220:8080';

export const API = create({
  baseURL,
  withCredentials: true,
});

function methodLog(response) {
  const isSuccess = response.ok;
  switch (response.config.method?.toLocalUpperCase()) {
    case 'GET':
      console.log(
        `${
          isSuccess ? '성공!' : '실패!'
        } %c${response.config?.method?.toLocalUpperCase()}`,
        'background: #191919; color:#14C38E',
        response.status,
        response.config?.url,
        '\n',
        {
          data: response.data,
          headers: response.headers,
        },
      );
  }
}

API.addMonitor(response => {
  if ((process.env.NODE_ENV = 'development')) methodLog(response);
});
