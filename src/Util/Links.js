const root = "http://localhost:5000"

export default {
    taskRequest: `${root}/task_request`,
    phones: `${root}/phones`,
    phones_data: `${root}/phones_data`,
    requestPhone: `${root}/request_phone`,
    proxy: `${root}/proxy`,
    getProxy: (limit, offset) => `${root}/proxy?limit=${limit}&offset=${offset}`,
    availableNumbers: `${root}/available_numbers`
}