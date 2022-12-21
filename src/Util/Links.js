// const root = "http://localhost:5000"
const root = "http://65.108.88.175:5000"

export default {
    articlesByShopId: id => `${root}/articles/by_shop?shop_id=${id}`,
    articlesBySearchQuery: q => `${root}/articles/by_search_query?q=${q}`,
    taskRequest: `${root}/task_request`,
    phones: `${root}/phones`,
    phones_data: `${root}/phones_data`,
    requestPhone: `${root}/request_phone`,
    proxy: `${root}/proxy`,
    getProxy: (limit, offset) => `${root}/proxy?limit=${limit}&offset=${offset}`,
    availableNumbers: `${root}/available_numbers`,
    tasks: id => `${root}/task_request/tasks?id=${id}`,
    deleteProxy: id => `${root}/proxy?id=${id}`
}