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
        caption: 'Designvorlage für Portfolio und Blog'
    },
    */
    title: 'Tampier',
    subtitle: 'Angewandte KI / Machine Learning / SWE',
    description: 'Angewandte KI / Machine Learning / SWE',
    image: {
        src: '/hero.jpeg',
        alt: 'Alexander Tampier'
    },
    headerNavLinks: [
        {
            text: 'Start',
            href: '/'
        },
        {
            text: 'Projekte',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Kontakt',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Impressum',
            href: '/impressum'
        },
        {
            text: 'Datenschutzerklärung',
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
        title: 'KI-Engineering in der Praxis.',
        text: 'Als **KI Fullstack Engineer** entwickle ich **KI-native Produkte und agentische Systeme** von der Idee über Produktkonzeption und Architektur bis zur produktionsreifen Umsetzung. Hier teile ich technische Beiträge und Projektkonzepte.',
        image: {
            src: '/alexander.png',
            alt: 'Alexander Tampier',
            caption: 'Alexander Tampier',
            objectPosition: 'center 20%',
            grayscale: true
        },
        actions: [
            {
                text: 'Kontakt',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Neue Beiträge per E-Mail',
        text: 'Technische Notizen und neue Projektideen direkt in dein Postfach.',
        formUrl: '#'
    },
    postsPerPage: 6,
    projectsPerPage: 6
};

export default siteConfig;
