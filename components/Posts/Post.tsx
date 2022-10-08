import { SinglePostType } from '../../types/PostType';
import Card from '../UI/Card';

interface PostType {
    post: SinglePostType,
}

const Post = ({post}: PostType) => {
    return(
        <Card>
            <section>
                <header className='mb-3'>
                    <p className='font-semibold'>
                        {post.title}
                    </p>
                </header>
                <p>
                    {post.body}                
                </p>
            </section>
        </Card>
    )
}

export default Post;