export type SinglePostType = {
    body: string,
    id: number,
    user_id: number,
    title: string,
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