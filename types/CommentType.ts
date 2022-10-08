export type SingleCommentType = {
    id: number,
    post_id: number,
    name: string,
    email: string,
    body: string,
}

export type CommentsType = {
    data: SingleCommentType[],
    meta: {
        pagination: {
            total: number,
            pages: number,
            page: number,
            links: {
                current: string | null,
                next: string | null,
                previous: string | null,
            }
        }
    }
} 