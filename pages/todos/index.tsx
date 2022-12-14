import { useEffect } from "react";
import { GetStaticProps } from "next";
import { TodosType } from '../../types/TodosType';
import TodosList from '../../components/Todos/TodosList';
import Button from "../../components/UI/Button";
import { useAppDispatch,useAppSelector } from '../../hooks';
import { fetchTodos } from '../../store/async/fetch-todos';
import todoSlice from "../../store/slices/todoSlice";
import PageInfo from "../../components/UI/PageInfo";
import Spinner from '../../components/UI/Spinner';
import FailedLoading from '../../components/UI/FailedLoading';

interface TodosPageProps {
    todos?: TodosType,
    error?: string,
}

const TodosPage = ({todos, error}: TodosPageProps) => {
    const dispatch = useAppDispatch();
    //as TodoType used for IDE intellisense
    const fetchedTodos = useAppSelector((state) => state.todo.todos) as TodosType;
    const activeTodoPage = useAppSelector((state) => state.todo.activeTodosPage);
    const todosRequestStatus = useAppSelector((state) => state.todo.todosRequestStatus);
    
    //useEffect fetches new users if the data wasnt preRendered to avoid double downloading
    useEffect(()=> {
        if(activeTodoPage === 1) return;
        dispatch(fetchTodos(`https://gorest.co.in/public/v1/todos?page=${activeTodoPage}`));
    },[dispatch, activeTodoPage]);

    //showing user loading status after each fetching
    if(todosRequestStatus === 'pending') return <Spinner />;

    //showing user that fetching failed
    if(todosRequestStatus === 'failed') return <FailedLoading />;

    //checking if prerendered data was fetched correctly
    if(error) return <div>{error}</div>

    const loadTodos = (type: string) => {
        type === '+' ? dispatch(todoSlice.actions.setActiveTodosPage(activeTodoPage + 1)) : dispatch(todoSlice.actions.setActiveTodosPage(activeTodoPage - 1));
    } 

    return(
        <>
            <TodosList todos={activeTodoPage === 1 ? todos?.data : fetchedTodos.data}/>
            <PageInfo activePage={activeTodoPage} totalPages={todos!.meta.pagination.pages} totalUsers={todos!.meta.pagination.total} />
            <div className="flex justify-between px-4">
                {activeTodoPage > 1 && <Button text="Load Previous" btnFunction={loadTodos.bind(null, '-')} />} 
                {activeTodoPage < todos!.meta.pagination.pages && <Button text="Load next" btnFunction={loadTodos.bind(null, '+')}/>}
            </div>
        </>
    )
}

//getStaticProps return prerendered todos or info about error
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