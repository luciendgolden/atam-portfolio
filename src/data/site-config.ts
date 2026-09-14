export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
    icon?: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    /*
    logo: {
        src: '/about.jpeg',
        alt: 'logo',
        caption: 'Portfolio and blog theme'
    },
    */
    title: 'Tampier',
    subtitle: 'AI engineering / Applied machine learning',
    description: 'Tampier — hands-on projects and notes on AI engineering, machine learning, and robotics.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/',
            icon: 'twitter'
        },
        {
            text: 'GitHub',
            href: 'https://github.com',
            icon: 'github'
        },
        {
            text: 'LinkedIn',
            href: 'https://linkedin.com',
            icon: 'linkedin'
        },
        {
            text: 'RSS',
            href: '/rss.xml',
            icon: 'rss'
        }
    ],
    hero: {
        title: 'AI engineering, put into practice.',
        text: 'I turn ideas into working software, with a focus on **applied AI, machine learning, and robotics**. I care about the engineering behind a useful system: building it, evaluating how it behaves, and improving it through hands-on experimentation. Here you’ll find my projects, technical notes, and what I learn along the way.',
        image: {
            src: '/hero.jpeg',
            alt: 'A person sitting at a desk in front of a computer',
            caption: 'Photo by Marjana J.T'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 6,
    projectsPerPage: 6
};

export default siteConfig;
