import { GetStaticProps } from "next";
import { UsersType } from "../../types/UserType";
import UserList from '../../components/User/UsersList';

interface UserPageType {
    users: UsersType;
}

const UserPage = ({users}: UserPageType) => {
    return(
        <UserList users={users.data} />
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await fetch('https://gorest.co.in/public/v1/users');
    const users = await response.json();
    
    return {
      props: { users },
      revalidate: 120
    }
}

export default UserPage;