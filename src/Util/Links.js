const root = "http://localhost:8000"

export default {
    taskGroup: `${root}/task_group`,
    taskGroupShort: `${root}/task_group/short`,
    taskGroupById: id => `${root}/task_group/${id}`
}