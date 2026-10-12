import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import siteConfig from '../data/site-config.ts';
import { sortItemsByDateDesc } from '../utils/data-utils.ts';

export async function GET(context) {
    const posts = (await getCollection('blog')).sort(sortItemsByDateDesc);
    return rss({
        title: siteConfig.title,
        description: siteConfig.description,
        site: new URL(`${import.meta.env.BASE_URL}/`, context.site),
        customData: '<language>de-AT</language>',
        items: posts.map((item) => ({
            title: item.data.title,
            description: item.data.excerpt,
            link: `${import.meta.env.BASE_URL}/blog/${item.id}/`,
            pubDate: item.data.publishDate.setUTCHours(0)
        }))
    });
}
