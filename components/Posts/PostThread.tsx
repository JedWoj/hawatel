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
        return comments.map(com => <PostComment key={com.id} />)
    }
    
    return(
        <Card>
            <Post post={post} />
            <div>
                {renderComments()}
            </div>
        </Card>
    )
}

export default PostThread;