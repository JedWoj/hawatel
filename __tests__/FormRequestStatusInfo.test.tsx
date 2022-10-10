import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormRequestStatusInfo from '../components/Forms/FormRequestStatusInfo';

describe('FormRequestStatusInfo component test', () => {
    it('renders message correctly', () => {
        render(
            <FormRequestStatusInfo status='Something Went Wrong!' />
            );
        const status = screen.getByText('Something Went Wrong!');
        expect(status).toBeInTheDocument();
    })
})