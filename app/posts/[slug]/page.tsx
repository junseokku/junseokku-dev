import { Post, posts } from '#site/content';
import { MDXContent } from '@/components/mdx-content';
import { Giscus } from '@/lib/Giscus';
import { myInfo } from 'app/constants/myInfo';
import { SEOConfig } from 'app/constants/SEOConfig';
import { format, parseISO } from 'date-fns';
import { Metadata } from 'next';
import Link from 'next/link';

type Params = { params: Promise<{ slug: string }> };

export const generateStaticParams = async () =>
  posts.map((post) => ({ slug: post.slug }));

const PostLayout = async ({ params }: Params) => {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);

  return (
    <main className="flex flex-col gap-8">
      {/* post header */}
      <div className="text-center">
        <div className="flex gap-2 justify-center">
          <time
            dateTime={post.createdAt}
            className="text-xs text-textGrayColor"
          >
            {format(parseISO(post.createdAt), 'yyyy.MM.dd')}
          </time>
          <span className="text-xs text-textGrayColor">|</span>
          <span className="text-xs text-textGrayColor">{`${post.metadata.readingTime} min`}</span>
        </div>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      {/* post article */}
      <article className="relative prose prose-stone dark:prose-invert max-w-3xl">
        <hr className="border-1 border-borderColor" />
        <MDXContent code={post.content} />
        {/* <FloatingTOC toc={post.toc} /> */}
      </article>
      {/* TODO - post footer */}
      {/* post comment */}
      <Giscus />
    </main>
  );
};

/**
 * 개발하면서 이룰 것
 * 1. position: sticky 동작을 완벽히 알기 -> 지금 적용했는데 적용 안되는 이유 파악하기
 * 2. 현재 브라우저 스크린보다 overflow-x 초과 시 개행되게 만들기
 *    - 이건 overflow-x-hidden 속성으로 적용해보았는데 대체 필요함.
 */
const FloatingTOC = ({ toc }: { toc: Post['toc'] }) => {
  return (
    <div className="sticky top-0 right-0 overflow-x-hidden">
      {toc.map((title) => (
        <div key={title.url}>
          <Link href={`#${title.url}`}>{title.title}</Link>
        </div>
      ))}
    </div>
  );
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const targetPost = posts.find((post) => post.slug === slug);

  // TODO redirect to 404
  if (!targetPost) throw new Error(`Post not found for slug: ${slug}`);

  const title = `${myInfo.blog.name}, ${targetPost.title}`;
  const description = `${myInfo.blog.name}, ${targetPost.summary}`;
  const url = `${myInfo.blog.url}${targetPost.permalink}`;

  return {
    ...SEOConfig,
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
