import type {TodoProps, ConfigProps} from '@/utils/types'
import yunRequest from '@/utils/request'

function createTodoApi(payload: TodoProps, config: ConfigProps){
  return yunRequest('/api/todo/create_todo',{
    methods: 'post',
    data: payload,
    config
  })
}

export default {
  createTodoApi
}
