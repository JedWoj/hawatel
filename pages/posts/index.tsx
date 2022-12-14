import { useEffect } from "react";
import { GetStaticProps } from "next";
import { getFormattedPromise } from "../../utils/getFormattedPromise";
import { useAppDispatch,useAppSelector } from '../../hooks';
import { PostsType } from "../../types/PostType";
import { CommentsType } from '../../types/CommentType'; 
import PostList from '../../components/Posts/PostsList';
import { fetchPosts } from '../../store/async/fetch-posts';
import Button from '../../components/UI/Button';
import postSlice from "../../store/slices/postsSlice";
import PageInfo from '../../components/UI/PageInfo';
import Spinner from '../../components/UI/Spinner';
import FailedLoading from '../../components/UI/FailedLoading';

interface PostsPageType {
    posts?: PostsType,
    comments?: CommentsType,
    error?: string, 
}

const PostsPage = ({posts, comments, error}: PostsPageType) => {
    const dispatch = useAppDispatch();
    const activePostPage = useAppSelector((state) => state.post.activePostPage);
    const fetchedPosts = useAppSelector((state) => state.post.posts) as PostsType;
    const fetchedComments = useAppSelector((state) => state.post.comments) as CommentsType;
    const postsRequestStatus = useAppSelector((state) => state.post.postRequestStatus);
    
    //fetching posts and comments from api if the page isnt
    useEffect(()=> {
        if(activePostPage === 1) return;
        dispatch(fetchPosts(activePostPage));
    },[dispatch, activePostPage]);
    
    //showing user loading status after each fetching
    if(postsRequestStatus === 'pending') return <Spinner />;

    //showing user that fetching failed
    if(postsRequestStatus === 'failed') return <FailedLoading />;

    //showing error if prerendered data isnt correct
    if(posts === undefined) return <div>{error}</div>;
    
    const loadPosts = (type: string) => {
        type === '+' ? dispatch(postSlice.actions.setActivePostPage(activePostPage + 1)) : dispatch(postSlice.actions.setActivePostPage(activePostPage - 1));
    } 

    return(
        <div>
            <PostList comments={activePostPage === 1 ? comments : fetchedComments} posts={activePostPage === 1 ? posts : fetchedPosts}/>
            <PageInfo activePage={activePostPage} totalPages={posts!.meta.pagination.pages} totalUsers={posts!.meta.pagination.total} />
            <div className="flex justify-between px-4">
                {activePostPage > 1 && <Button text="Load Previous" btnFunction={loadPosts.bind(null, '-')} />} 
                {activePostPage < posts.meta.pagination.pages && <Button text="Load next" btnFunction={loadPosts.bind(null, '+')}/>}
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const [posts, comments]: [PostsType, CommentsType] = await Promise.all([
            getFormattedPromise('https://gorest.co.in/public/v1/posts'),
            getFormattedPromise('https://gorest.co.in/public/v1/comments'),
        ]);
        if(!posts.data || !comments.data) throw new Error();
        return {
          props: { posts, comments },
          revalidate: 120
        }
    } catch (error) {
        return {
            props: { error: 'Something went wrong!' }
        }
    }
    
}

export default PostsPage;