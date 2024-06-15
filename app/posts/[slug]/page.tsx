import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Metadata } from 'next';
import { myInfo } from 'app/constants/myInfo';
import { Giscus } from 'app/libs/Giscus';

type Params = { params: { slug: string } };

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

const PostLayout = ({ params }: Params) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <main className="flex flex-col gap-8">
      {/* post header */}
      <div className="text-center">
        <div className="flex gap-2 justify-center">
          <time dateTime={post.createdAt} className="text-xs text-gray-600">
            {format(parseISO(post.createdAt), 'yyyy.MM.dd')}
          </time>
          <span className="text-xs text-gray-600">|</span>
          <span className="text-xs text-gray-600">{`${post.readingMinutes} min`}</span>
        </div>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      {/* post article */}
      <article className="prose prose-stone dark:prose-invert max-w-3xl">
        <MDXContent />
      </article>
      {/* TODO - post footer */}
      {/* post comment */}
      <Giscus />
    </main>
  );
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const targetPost = allPosts.find(
    (post) => post._raw.flattenedPath === params.slug,
  );

  // TODO redirect to 404
  if (!targetPost) throw new Error(`Post not found for slug: ${params.slug}`);

  const title = `${myInfo.blog.name}, ${targetPost.title}`;
  const description = `${myInfo.blog.name}, ${targetPost.summary}`;
  const url = `${myInfo.blog.url}${targetPost.url}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    keywords: targetPost.tags,
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
