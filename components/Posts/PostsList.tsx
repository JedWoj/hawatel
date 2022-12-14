import PostThread from "./PostThread";
import { CommentsType } from '../../types/CommentType';
import { PostsType } from '../../types/PostType';

interface PostsListType {
    posts?: PostsType,
    comments?: CommentsType,
}

const PostsList = ({posts,comments}: PostsListType) => {
    if(posts?.data === undefined) return <div className="text-center">Loading!</div>;
    //postsWithCommentss takes posts, filters them and creates array of objects with comments and post with the same ID
    const postsWithComments = posts.data.map(post => {
        const matchingComments = comments!.data.filter(comment => comment.post_id === post.id);
        return {
            post: post,
            comments: matchingComments,
        }
    })

    const renderPosts = () => {
        return postsWithComments.map(post => <PostThread key={post.post.id} post={post.post} comments={post.comments} />);
    }
    
    return(
        <div className="mx-auto max-w-6xl">
            {renderPosts()}
        </div>
    )
}

export default PostsList;