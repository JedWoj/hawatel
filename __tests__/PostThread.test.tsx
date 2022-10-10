import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PostThread from '../components/Posts/PostThread';

describe('PostThread component test', () => {
    it('renders comment correctly', () => {
        render(
            <PostThread post={{body: 'XYZ', id: 2, title:'TITLE', user_id:123}} comments={[{body:'COMMENT',email:'comment@gmail.com',id: 2, name:'Jędrzej', post_id:2}]} />
            );
        const comment = screen.getByText('COMMENT');
        expect(comment).toBeInTheDocument();
    })
})