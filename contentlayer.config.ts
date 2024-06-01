import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import readingTime from 'reading-time';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    createdAt: { type: 'date', required: true },
    updatedAt: { type: 'date', required: false },
    author: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    categories: { type: 'list', of: { type: 'string' }, required: true },
    summary: { type: 'string', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
    readingMinutes: {
      type: 'string',
      resolve: (post) => Math.ceil(readingTime(post.body.raw).minutes),
    },
  },
}));

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] });
