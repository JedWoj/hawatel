import User from "./User";
import { SingleUserType } from "../../types/UserType";

interface UsersListType {
    users: SingleUserType[];
}

const UsersList = ({users}: UsersListType) => {
    const renderUsers = () => {
        return users.map(user => <User key={user.id} user={user} />);
    }
    
    return(
        <ul>
            {renderUsers()}
        </ul>
    )
}

export default UsersList;