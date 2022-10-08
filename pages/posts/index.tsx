import { GetStaticProps } from "next";
import { getFormattedPromise } from "../../utils/getFormattedPromise";

const PostsPage = ({posts, comments}: any) => {
    console.log('POSTS:',posts);
    console.log('Comments:',comments);
    return(
        <div>
            Posts Page
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    try {
        const [posts, comments] = await Promise.all([
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