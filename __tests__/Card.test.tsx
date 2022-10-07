import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import User from '../components/User/User';
import Card from '../components/UI/Card';

describe('Card component test', () => {
    it('Card renders adam', () => {
        render(
            <Card>
                <User user={{name:'Adam', email: 'test@test.com', gender: 'male', status: 'active', id: 2}} />
            </Card>);
        const user = screen.getByText('Adam', {exact: false});
        expect(user).toBeInTheDocument();
    })
})