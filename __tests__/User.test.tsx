import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import User from '../components/User/User';

describe('User component tests', () => {
    it('User renders Adam', () => {
        render(<User user={{name:'Adam', email: 'test@test.com', gender: 'male', status: 'active', id: 2}} />);
        const user = screen.getByText('Adam');
        expect(user).toBeInTheDocument();
    })
})