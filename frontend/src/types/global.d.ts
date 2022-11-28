
// 分页定义
type FETCH_LIST<T=any> = {
    // 数据列表
    list: T[],
    // 总数
    totalCount: number,
    // 分页限制
    limit: number,
    // 总页数
    totalPages: number,
    // 当前页数
    page: number,
    // 是否有上一页
    hasPrevPage: boolean,
    // 是否有下一页
    hasNextPage: boolean,
}

// 分页请求入参
type FETCH_PAYLOAD = {
    // 当前页数
    page?: number,

    limit?: number
}
