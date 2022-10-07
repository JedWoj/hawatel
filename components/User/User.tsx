import { SingleUserType } from "../../types/UserType";
import Card from '../UI/Card';

interface UserComponentType {
    user: SingleUserType;
} 

const User = ({user}: UserComponentType) => {
    const { email,gender,id,name,status } = user;

    return(
        <li className="relative self-stretch">
            <Card>
                <p>
                    Name: {name}
                </p>
                <p>
                    Email: {email}
                </p>
                <p>
                    Gender: {gender}
                </p>
                <p>
                    ID: {id}
                </p>
            </Card>
            <div className={`absolute top-0 left-0 -translate-x-1 -translate-y-1 w-4 h-4 rounded-full ${status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
        </li>
    )
}

export default User;