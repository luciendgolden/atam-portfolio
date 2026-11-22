export type Image = {
    src: string;
    alt?: string;
    caption?: string;
    objectPosition?: string;
    grayscale?: boolean;
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
        caption: 'Portfolio and blog template'
    },
    */
    title: 'Tampier',
    subtitle: 'Applied AI / Machine Learning / Software Engineering',
    description: 'Applied AI / Machine Learning / Software Engineering',
    image: {
        src: '/hero.jpeg',
        alt: 'Alexander Tampier'
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
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Legal Notice',
            href: '/impressum'
        },
        {
            text: 'Privacy Policy',
            href: '/datenschutz'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/luciendgolden',
            icon: 'github'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/alexander-tampier-658827137',
            icon: 'linkedin'
        },
        {
            text: 'RSS',
            href: '/rss.xml',
            icon: 'rss'
        }
    ],
    hero: {
        title: 'AI engineering in practice.',
        text: 'As a **full-stack AI engineer**, I build **AI-native products and agentic systems**, from the initial idea and product design through architecture and production. Here I share Blog and Projects.',
        image: {
            src: '/alexander.png',
            alt: 'Alexander Tampier',
            caption: 'Alexander Tampier',
            objectPosition: 'center 20%',
            grayscale: true
        },
        actions: [
            {
                text: 'Contact',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'New articles by email',
        text: 'Technical notes and new project ideas delivered to your inbox.',
        formUrl: '#'
    },
    postsPerPage: 6,
    projectsPerPage: 6
};

export default siteConfig;
