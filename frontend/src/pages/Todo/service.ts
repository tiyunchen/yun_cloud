import yRequest from "@/utils/request";

export namespace TODO {
    // 待办数据类型
    export type IData = {
        // 标题
        title: string,
        // 截止时间
        endTime: string,
        // 是否提醒
        remind: boolean,
        // 是否完成
        finished: boolean,
        // 唯一编码
        id: string
    }
    // 新建/编辑待办入参
    export type CREATE_PAYLOAD = Omit<IData, 'id'>
}

/**
 * 新建待办
 * @param payload
 */
const todoCreate = (payload:TODO.CREATE_PAYLOAD) =>{
    return yRequest<TODO.IData>({
        url: '/todo/create',
        body: payload,
        option: {
            successMsg: '已成功添加待办'
        }
    })
}

/**
 * 获取待办列表
 * @param payload
 */
const getTodoList = (payload: FETCH_PAYLOAD) =>{
    return yRequest<FETCH_LIST<TODO.IData>>({
        url: '/todo/list',
        body: payload,
        method: 'get'
    })
}



export default {
    todoCreate,
    getTodoList
}

