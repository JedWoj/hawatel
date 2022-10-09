export type SingleTodoType = {
    due_on: string,
    id: number,
    status: string,
    title: string,
    user_id: number
}

export type TodosType = {
    data: SingleTodoType[],
    meta: {
        pagination: {
            page: number,
            pages: number,
            total: number,
            links: {
                previous: string | null,
                current: string | null,
                next: string | null,
            }
        }
    }
}