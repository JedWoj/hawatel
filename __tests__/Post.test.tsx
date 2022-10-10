import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Post from '../components/Posts/Post';

describe('Post component test', () => {
    it('renders title correctly', () => {
        render(
            <Post post={{body: 'XYZ', id: 2, title:'TITLE', user_id:123}} />
            );
        const title = screen.getByText('TITLE');
        expect(title).toBeInTheDocument();
    })
})