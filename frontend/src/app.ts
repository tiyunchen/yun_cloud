import type { RequestConfig } from 'umi';

// 请求错误配置
export const request: RequestConfig = {
  timeout: 1000 * 60,
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [],
  errorConfig: {
    adaptor: (resData) => {
      console.log('resData', resData)
      return {
        ...resData,
        errorMessage: resData.msg,
        showType: resData && resData.msg ? 2 : 0,
        // success: resData.ok,
        // errorMessage: resData.message,
      };
    },
  },
};
