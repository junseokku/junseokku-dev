import { PostCard } from "app/components/PostCard";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const PostLayout = ({ params }: { params: { slug: string } }) => {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    return <>{posts.map((post, idx) => (<PostCard key={idx} {...post} />))}</>;
}

export default PostLayout;