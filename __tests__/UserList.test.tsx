import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserList from '../components/User/UsersList';

describe('UserList tests', () => {
    it('UserList renders "Adam"', () => {
        render(<UserList users={[{name:'Adam', email: 'test@test.com', gender: 'male', status: 'active', id: 2}]} />);
        const user = screen.getByText('Adam');
        expect(user).toBeInTheDocument();
    })
})