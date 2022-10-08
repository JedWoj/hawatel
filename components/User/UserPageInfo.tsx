interface UserPageInfoType {
    activePage: number,
    totalPages: number,
    totalUsers: number,
}

const UserPageInfo = ({activePage, totalPages, totalUsers}: UserPageInfoType) => {
    return(
        <div className="flex p-4 pt-0 justify-around font-semibold">
            <p>
                Page: {activePage}/{totalPages}
            </p>
            <p>
                Total users: {totalUsers}
            </p>
        </div>
    )
}

export default UserPageInfo;