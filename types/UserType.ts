export type SingleUserType = {
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string,
}

export type UsersType = {
    data: SingleUserType[],
    meta: {
        pagination: {
            limit: number,
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