import type { Effect, Reducer, Subscription} from 'umi'
import userService from '@/apis/user'
// import { ImmerReducer } from 'umi'

export interface UserInfoProps {
  username?: string,
  email?: string,
  [key: string]: any;
}


export interface IndexModelState {
  name: string;
  userInfo?: UserInfoProps
}

export interface IndexModelType {
  namespace: 'app';
  state: IndexModelState;
  effects: {
    query: Effect;
    refreshToken: Effect
  };
  reducers: {
    save: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: IndexModelType = {
  namespace: 'app',

  state: {
    name: '',
    userInfo: {}
  },

  effects: {
    *query({ payload }, { call, put }) {},

    // 刷新用户状态
    *refreshToken({  }, {call, put}){
      const res = yield call(userService.refreshTokenApi)
      console.log('刷新用户状态',res)
      yield put({
        type: 'save',
        payload: {
          userInfo: res.result ? res.data : {}
        }
      })
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      }
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        console.log('pathname', pathname)
        if(!pathname.startsWith('/user')){
          dispatch({
            type: 'refreshToken',
          })
        }

        // console.log('pathname', pathname)
        // if (pathname === '/') {

        // }
      })
    },
  },
}

export default IndexModel
