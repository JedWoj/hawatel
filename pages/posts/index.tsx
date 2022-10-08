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

interface PostsPageType {
    posts: PostsType,
    comments: CommentsType,
}

const PostsPage = ({posts, comments}: PostsPageType) => {
    const dispatch = useAppDispatch();
    const activePage = useAppSelector((state) => state.post.activePage);
    const fetchedPosts = useAppSelector((state) => state.post.posts);
    const fetchedComments = useAppSelector((state) => state.post.posts);
    console.log(posts);
    console.log(fetchedPosts)

    useEffect(()=> {
        // if(activePage === 1) return;
        dispatch(fetchPosts(activePage));
    },[dispatch, activePage]);

    const loadPosts = (type: string) => {
        type === '+' ? dispatch(postSlice.actions.setActivePage(activePage + 1)) : dispatch(postSlice.actions.setActivePage(activePage - 1));
    } 

    return(
        <div>
            <PostList comments={activePage === 1 ? comments : fetchedComments} posts={activePage === 1 ? posts : fetchedPosts}/>
            <div className="flex justify-between px-4">
                {activePage > 1 && <Button text="Load Previous" btnFunction={loadPosts.bind(null, '-')} />} 
                {activePage < posts.meta.pagination.pages && <Button text="Load next" btnFunction={loadPosts.bind(null, '+')}/>}
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