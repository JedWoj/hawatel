import { GetStaticProps } from "next";
import { TodosType } from '../../types/TodosType';
import TodosList from '../../components/Todos/TodosList';

interface TodosPageProps {
    todos?: TodosType,
    error?: string,
}

const TodosPage = ({todos, error}: TodosPageProps) => {
    if(error) return <div>{error}</div>

    return(
        <TodosList todos={todos?.data}/>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const response = await fetch('https://gorest.co.in/public/v1/todos');
        if(!response.ok) throw new Error();
        const todos = await response.json();
        return {
          props: { todos },
          revalidate: 120
        }
    } catch (error) {
        return {
            props: { error: 'Something went wrong!' }
        }
    }
}

export default TodosPage;