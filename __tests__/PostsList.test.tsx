import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PostsList from '../components/Posts/PostsList';

const dummyPosts = {data: [{id: 913, user_id: 1892, title: 'Aut calculus tamisium aveho voluptatibus deficio a…em vulticulus conatus curto teneo taedium amitto.', body: 'Spargo spiculum deripio. Vinco arguo animadverto. …. Avoco certo adiuvo. Vesica coadunatio constans.'}], meta:{pagination: {total: 650, pages: 65, page: 7, limit: 10,links:{previous: 'https://gorest.co.in/public/v1/posts?page=6', current: 'https://gorest.co.in/public/v1/posts?page=7', next: 'https://gorest.co.in/public/v1/posts?page=8'}}}};

const notMatchingComments = {data: [{id: 882, post_id: 914, name: 'Suman Desai', email: 'suman_desai@green-larson.name', body: 'Dignissimos asperiores autem.'}], meta:{pagination: {total: 650, pages: 65, page: 7, limit: 10,links:{previous: 'https://gorest.co.in/public/v1/posts?page=6', current: 'https://gorest.co.in/public/v1/posts?page=7', next: 'https://gorest.co.in/public/v1/posts?page=8'}}}};

const matchingComments = {data: [{id: 881, post_id: 913, name: 'Govinda Embranthiri', email: 'embranthiri_govinda@cremin.net', body: 'Consequatur nulla ut. Qui ut blanditiis.'}], meta:{pagination: {total: 650, pages: 65, page: 7, limit: 10,links:{previous: 'https://gorest.co.in/public/v1/posts?page=6', current: 'https://gorest.co.in/public/v1/posts?page=7', next: 'https://gorest.co.in/public/v1/posts?page=8'}}}};

describe('FormRequestStatusInfo component test', () => {
    it('shows loading when posts are undefined', () => {
        render(
            <PostsList posts={undefined} comments={undefined} />
            );
        const loading = screen.getByText('Loading!');
        expect(loading).toBeInTheDocument();
    })
    it('doesnt render comments when ID isnt matching', () => {
        render(
            <PostsList comments={notMatchingComments} posts={dummyPosts} />
        )
        const author = screen.queryByText('Author:', {exact: false});
        expect(author).not.toBeInTheDocument();
    })
    it('renders comments when ID is matching', () => {
        render(
            <PostsList comments={matchingComments} posts={dummyPosts} />
        )
        const author = screen.queryByText('Author:', {exact: false})
        expect(author).toBeInTheDocument();
    })
})