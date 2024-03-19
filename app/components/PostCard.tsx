import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Link from 'next/link';

export function PostCard(post: Post) {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <Link href={post.url}>
      <h2 className="mb-1 text-xl text-slate-950 font-semibold">
        {post.title}
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <MDXContent />
    </Link>
  );
}
