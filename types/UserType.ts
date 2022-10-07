export type SingleUserType = {
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string,
}

export type UsersType = {
    data: SingleUserType[],
}