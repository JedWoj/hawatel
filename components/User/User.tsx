import { SingleUserType } from "../../types/UserType";
import Card from '../UI/Card';

interface UserComponentType {
    user: SingleUserType;
} 

const User = ({user}: UserComponentType) => {
    return(
        <li>
            <Card>
                <div>
                    {user.name}
                </div>
            </Card>
        </li>
    )
}

export default User;