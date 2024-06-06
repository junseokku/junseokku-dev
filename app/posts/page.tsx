import { PostCard } from 'app/components/PostCard';
import { myInfo } from 'app/constants/myInfo';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { type Metadata } from 'next';

const PostLayout = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
  );

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  );
};

export async function generateMetadata(): Promise<Metadata> {
  const title = `${myInfo.blog.name}, 게시글 목록`;
  const description = `${myInfo.blog.name}, 모든 게시글 목록`;
  const url = `${myInfo.blog.url}/posts`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      url,
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default PostLayout;
