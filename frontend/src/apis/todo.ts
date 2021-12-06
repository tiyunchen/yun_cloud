import type {ConfigProps, TodoProps} from '@/utils/types'
import yunRequest from '@/utils/request'

function createTodoApi(payload: TodoProps, config: ConfigProps) {
  return yunRequest('/api/todo/create', {
    method: 'post',
    data: payload,
    config
  })
}


interface TodoQueryProps {
  query?: string,
  isMy: boolean, // 是否是获取自己的
}

// 获取todo列表
function getTodos(payload: TodoQueryProps, config: ConfigProps = {}) {
  return yunRequest('/api/todo/list', {
    method: 'get',
    data: payload,
    config
  })
}

export default {
  createTodoApi,
  getTodos
}
