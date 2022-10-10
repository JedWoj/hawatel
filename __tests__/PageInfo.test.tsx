import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PageInfo from '../components/UI/PageInfo';

describe('PageInfo component test', () => {
    it('renders pages correctly', () => {
        render(
            <PageInfo activePage={1} totalPages={100} totalUsers={1000} />
            );
        const status = screen.getByText('Page: 1/100');
        expect(status).toBeInTheDocument();
    })
})