import { Post } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

export function PostCard(post: Post) {
  return (
    <Link href={post.url}>
      <h2 className="mb-1 text-xl text-slate-950 font-semibold">
        {post.title}
      </h2>
      <time
        dateTime={post.createdAt}
        className="mb-2 block text-xs text-gray-600"
      >
        {format(parseISO(post.createdAt), 'LLLL d, yyyy')}
      </time>
    </Link>
  );
}
