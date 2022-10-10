import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PostComment from '../components/Posts/PostComment';

describe('PostComment component test', () => {
    it('renders message correctly', () => {
        render(
            <PostComment comment={{body: 'comment', email:'adw@gmail.com', id: 123, name:'Adam', post_id:43}} />
            );
        const comment = screen.getByText('comment');
        expect(comment).toBeInTheDocument();
    })
})