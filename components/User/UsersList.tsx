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
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {renderUsers()}
        </ul>
    )
}

export default UsersList;