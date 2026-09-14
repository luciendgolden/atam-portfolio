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
    subtitle: 'Computer Science / Machine Learning / Robotics',
    description: 'Tampier — projects and explorations in computer science, machine learning, and robotics.',
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
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
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
        title: 'Software.\nIntelligence.\nMotion.',
        text: 'Exploring the intersection of computer science, machine learning, and robotics. A collection of projects, ideas, and notes — from software to the physical world.',
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
