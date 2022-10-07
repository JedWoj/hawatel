import { GetStaticProps } from "next";
import { UsersType } from "../../types/UserType";
import UserList from '../../components/User/UsersList';

interface UserPageType {
    users?: UsersType;
    error?: string;
}

const UserPage = ({users, error}: UserPageType) => {
    return users ? <UserList users={users.data} /> : <div className="text-2xl sm:text-4xl md:text-6xl text-violet-700 text-center fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">{error}</div>;
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