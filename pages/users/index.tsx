import { useEffect } from "react";
import { GetStaticProps } from "next";
import { UsersType } from "../../types/UserType";
import UserList from '../../components/User/UsersList';
import { useAppDispatch,useAppSelector } from '../../hooks';
import { fetchUsers } from "../../store/async/fetch-users";
import userSlice from '../../store/slices/userSlice';
import Button from "../../components/UI/Button";

interface UserPageType {
    users?: UsersType;
    error?: string;
}

const UserPage = ({users, error}: UserPageType) => {
    const dispatch = useAppDispatch();
    const fetchedUsers = useAppSelector((state) => state.user.users) as {users: UsersType};
    const activePage = useAppSelector((state) => state.user.activePage);
    
    useEffect(()=> {
        if(activePage === 1) return;
        dispatch(fetchUsers(`https://gorest.co.in/public/v1/users?page=${activePage}`));
    },[dispatch, activePage]);

    const loadUsers = (type: string) => {
        type === '+' ? dispatch(userSlice.actions.setActivePage(activePage + 1)) : dispatch(userSlice.actions.setActivePage(activePage - 1));
    } 
    
    return(
        <>
            {users && <>
                <UserList users={activePage === 1 ? users.data : fetchedUsers?.users?.data} />
                <div className="flex justify-between px-4">
                    {activePage > 1 && <Button text="Load Previous" btnFunction={loadUsers.bind(null, '-')} />} 
                    <Button text="Load next" btnFunction={loadUsers.bind(null, '+')}/>
                </div>
            </>}
            {!users && <div className="text-2xl sm:text-4xl md:text-6xl text-violet-700 text-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                {error}
            </div>}
        </>
    )
}

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