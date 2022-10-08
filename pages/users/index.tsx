import { useEffect } from "react";
import { GetStaticProps } from "next";
import { UsersType } from "../../types/UserType";
import UserList from '../../components/User/UsersList';
import { useAppDispatch,useAppSelector } from '../../hooks';
import { fetchUsers } from "../../store/async/fetch-users";
import userSlice from '../../store/slices/userSlice';
import Button from "../../components/UI/Button";
import UserPageInfo from '../../components/User/UserPageInfo';

interface UserPageType {
    users?: UsersType;
    error?: string;
}

const UserPage = ({users, error}: UserPageType) => {
    const dispatch = useAppDispatch();
    const fetchedUsers = useAppSelector((state) => state.user.users) as {users: UsersType};
    const activePage = useAppSelector((state) => state.user.activePage);
    
    //useEffect fetches new users if the data wasnt preRendered to avoid double downloading
    useEffect(()=> {
        if(activePage === 1) return;
        dispatch(fetchUsers(`https://gorest.co.in/public/v1/users?page=${activePage}`));
    },[dispatch, activePage]);

    //loadUsers set increments or decrements activePage locatded in Redux store depending on provided type, type MUST be "+" if you want to increment avtivePage
    const loadUsers = (type: string) => {
        type === '+' ? dispatch(userSlice.actions.setActivePage(activePage + 1)) : dispatch(userSlice.actions.setActivePage(activePage - 1));
    } 
    
    console.log(users);

    return(
        <>
            {users && <section>
                <UserList users={activePage === 1 ? users.data : fetchedUsers?.users?.data} />
                <UserPageInfo activePage={activePage} totalPages={users.meta.pagination.pages} totalUsers={users.meta.pagination.total} />
                <div className="flex justify-between px-4">
                    {activePage > 1 && <Button text="Load Previous" btnFunction={loadUsers.bind(null, '-')} />} 
                    {activePage < users.meta.pagination.pages && <Button text="Load next" btnFunction={loadUsers.bind(null, '+')}/>}
                </div>
            </section>}
            {!users && <div className="text-2xl sm:text-4xl md:text-6xl text-violet-700 text-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                {error}
            </div>}
        </>
    )
}

//getStaticProps fetches users for preRendering and return them as props in component, besides that it has validation in case something went wrong with using API 
export const getStaticProps: GetStaticProps = async () => {
    try {
        const response = await fetch('https://gorest.co.in/public/v1/users');
        if(!response.ok) throw new Error();
        const users: UsersType = await response.json();
        return {
          props: { users },
          revalidate: 120
        }
    } catch (error) {
        return {
            props: { error: 'Something went wrong!' }
        }
    }
}

export default UserPage;