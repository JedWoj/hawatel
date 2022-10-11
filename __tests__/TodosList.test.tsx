import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodosList from '../components/Todos/TodosList';

const dummyTodos = [{id: 1044, user_id: 2133, title: 'Catena cernuus ex aqua vespillo comis adnuo suadeo.', due_on: '2022-10-13T00:00:00.000+05:30', status: 'pending'},
{id: 1043, user_id: 2132, title: 'Cursus eum sum amo tondeo perferendis urbs.', due_on: '2022-11-08T00:00:00.000+05:30', status: 'completed'}]

describe('TodosList component test', () => {
    it('Shows user info that sth went wrong', () => {
        render(
            <TodosList todos={undefined} />
        );
        const status = screen.queryByText('Something went wrong!');
        expect(status).toBeInTheDocument();
    })
})