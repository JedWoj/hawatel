import User from "./User";
import { SingleUserType } from "../../types/UserType";

interface UsersListType {
    users?: SingleUserType[];
}

const UsersList = ({users}: UsersListType) => {
    //function takes user and for evry user in list returns user component
    const renderUsers = () => {
        if(users === undefined) return <div>Something Went Wrong!</div>
        return users.map(user => <User key={user.id} user={user} />);
    }
    
    return(
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {renderUsers()}
        </ul>
    )
}

export default UsersList;