import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import rehypeRewrite from 'rehype-rewrite';

const BASE_URL = '/atam-portfolio';

export default defineConfig({
    site: 'https://luciendgolden.github.io',
    base: BASE_URL,
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: true
        })
    ],
    markdown: {
        rehypePlugins: [
            [
                rehypeRewrite,
                {
                    rewrite: (node) => {
                        if (node.tagName === 'img' && node.properties.src.startsWith('/')) {
                            node.properties.src = `${BASE_URL}${node.properties.src}`;
                        }
                    }
                }
            ]
        ]
    }
});
