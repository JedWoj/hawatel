import { SingleTodoType } from '../../types/TodosType';
import 'react-virtualized/styles.css';
import { Column, Table, AutoSizer } from 'react-virtualized';
import FailedLoading from '../../components/UI/FailedLoading';

interface TodosListProps {
    todos?: SingleTodoType[];
}

const TodosList = ({todos}: TodosListProps) => {
    //giving user info that data wasnt fetched correctly
    if(todos === undefined) return <FailedLoading />;
    //react-virtualized table for more details check official docs
    return(
            <div>
                <div className={'w-[100%] h-[80vh] md:h-[75vh]'}>
                    <AutoSizer>
                        {({width,height}) =>
                            <Table 
                            height={height} 
                            width={width}
                            headerHeight={20}
                            rowCount={todos.length}
                            rowGetter={({index}) => todos[index]}
                            rowHeight={50}
                            >
                                <Column 
                                    dataKey={'status'}
                                    width={width * 0.1}
                                    label='Status'
                                />    
                                <Column 
                                    dataKey={'due_on'}
                                    width={width * 0.2}
                                    label='Due On'
                                />    
                                <Column 
                                    dataKey={'id'}
                                    width={width * 0.1}
                                    label='ID'
                                />    
                                <Column 
                                    dataKey={'title'}
                                    width={width * 0.5}
                                    label='Title'
                                />    
                                <Column 
                                    dataKey={'user_id'}
                                    width={width * 0.1}
                                    label='UID'
                                />    
                        </Table>}
                    </AutoSizer>
                </div>
            </div>
    )
}

export default TodosList;