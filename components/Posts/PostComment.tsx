import Card from "../UI/Card";
import { SingleCommentType } from '../../types/CommentType';

interface PostCommentType {
    comment: SingleCommentType,
}

const PostComment = ({comment}: PostCommentType) => {
    const { body,email,name } = comment;

    return(
        <div className="w-[95%] ml-auto my-6">
            <Card>
                <header className="flex flex-col gap-1 border-b-2">
                    <p>
                        Author: {email}
                    </p>
                    <p className="font-semibold">
                        {name}
                    </p>
                </header>
                <p className="mt-4">
                    {body}
                </p>
            </Card>
        </div>
    )
}

export default PostComment;