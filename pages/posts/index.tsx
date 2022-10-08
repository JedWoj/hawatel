import { GetStaticProps } from "next";
import { getFormattedPromise } from "../../utils/getFormattedPromise";
import { PostsType } from "../../types/PostType";
import { CommentsType } from '../../types/CommentType'; 
import PostList from '../../components/Posts/PostsList';
interface PostsPageType {
    posts: PostsType,
    comments: CommentsType,
}

const PostsPage = ({posts, comments}: PostsPageType) => {
    return(
        <div>
            <PostList comments={comments} posts={posts}/>
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