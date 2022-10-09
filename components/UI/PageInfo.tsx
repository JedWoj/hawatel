interface PageInfoType {
    activePage: number,
    totalPages: number,
    totalUsers: number,
}

const PageInfo = ({activePage,totalPages,totalUsers}: PageInfoType) => {
    return(
        <div className="flex p-4 mt-3 pt-0 justify-around font-semibold">
            <p>
                Page: {activePage}/{totalPages}
            </p>
            <p>
                Total users: {totalUsers}
            </p>
        </div>
    )
}

export default PageInfo;