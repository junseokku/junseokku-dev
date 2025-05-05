import { posts } from '#site/content';
import { MetadataRoute } from 'next';
import { myInfo } from './constants/myInfo';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapPosts = generateSitemapPosts();

  return [
    {
      url: `${myInfo.blog.url}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${myInfo.blog.url}/posts`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...sitemapPosts,
  ];
}

const generateSitemapPosts = (): MetadataRoute.Sitemap => {
  return posts.map((post) => ({
    url: `${myInfo.blog.url}/posts/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.createdAt),
    changeFrequency: 'daily',
    priority: 0.8,
  }));
};
