import Card from "../UI/Card";
import PostComment from "./PostComment";
import Post from "./Post";
import { SinglePostType } from '../../types/PostType';
import { SingleCommentType } from '../../types/CommentType';

interface PostType {
    post: SinglePostType,
    comments: SingleCommentType[];
}

const PostThread = ({post, comments}: PostType) => {
    const renderComments = () => {
        return comments.map(comment => <PostComment comment={comment} key={comment.id} />);
    }
    
    return(
        <div className="border-b-4 py-4">
            <Card>
                <Post post={post} />
                <div>
                    {renderComments()}
                </div>
            </Card>
        </div>
    )
}

export default PostThread;