import type { NextPage } from 'next';
import UserForm from '../components/Forms/UserForm';
import PostForm from '../components/Forms/PostForm';

const Home: NextPage = () => {
  return (
    <div>
      <UserForm />
      <PostForm /> 
    </div>
  )
}

export default Home;
