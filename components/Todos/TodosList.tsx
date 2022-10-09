import { SingleTodoType } from '../../types/TodosType';
import 'react-virtualized/styles.css';
import { Column, Table } from 'react-virtualized';

interface TodosListProps {
    todos: SingleTodoType[] | undefined,
}

const TodosList = ({todos}: TodosListProps) => {
    if(todos === undefined) return <div>LOL</div>
    return(
            <div>
                <Table 
                    height={600} 
                    width={1000}
                    headerHeight={20}
                    rowCount={todos.length}
                    rowGetter={({index}) => todos[index]}
                    rowHeight={40}
                    >
                    <Column 
                        dataKey={'status'}
                        width={200}
                        label='Status'
                    />    
                    <Column 
                        dataKey={'due_on'}
                        width={200}
                        label='Due On'
                    />    
                    <Column 
                        dataKey={'id'}
                        width={200}
                        label='ID'
                    />    
                    <Column 
                        dataKey={'title'}
                        width={1500}
                        label='Title'
                    />    
                    <Column 
                        dataKey={'user_id'}
                        width={200}
                        label='User ID'
                    />    
                </Table>
        </div>
    )
}

export default TodosList;