import { MetadataRoute } from 'next';
import { myInfo } from './constants/myInfo';
import { allPosts } from 'contentlayer/generated';

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
  return allPosts.map((post) => ({
    url: `${myInfo.blog.url}/${post._raw.flattenedPath}`,
    lastModified: new Date(post.updatedAt ?? post.createdAt),
    changeFrequency: 'daily',
    priority: 0.8,
  }));
};
