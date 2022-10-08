export type SinglePostType = {
    body: string,
    email: string,
    id: number,
    name: string,
}

export type PostsType = {
    data: SinglePostType[],
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