import type { Effect, Reducer, Subscription} from 'umi'
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
    setup() {
      // return history.listen(({ pathname }: {pathname: string}) => {
      //   // console.log('pathname', pathname)
      //   // if (pathname === '/') {
      //   //   dispatch({
      //   //     type: 'query',
      //   //   })
      //   // }
      // })
    },
  },
}

export default IndexModel
