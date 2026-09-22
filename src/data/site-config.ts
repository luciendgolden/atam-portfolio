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
        caption: 'Designvorlage für Portfolio und Blog'
    },
    */
    title: 'Tampier',
    subtitle: 'Angewandte KI / Maschinelles Lernen / Robotik',
    description: 'Tampier – technische Beiträge und Projektkonzepte zu KI-Engineering, maschinellem Lernen und Robotik.',
    image: {
        src: '/hero.jpeg',
        alt: 'Alexander Tampier in einem Café'
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
            text: 'Themen',
            href: '/tags'
        },
        {
            text: 'Kontakt',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Nutzungsbedingungen',
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
        title: 'KI-Engineering in der Praxis.',
        text: 'Mich interessiert, wie aus einer Idee ein nachvollziehbares technisches System wird. Mein Fokus liegt auf **angewandter KI, maschinellem Lernen und Robotik**: Daten verstehen, Modelle sinnvoll einsetzen und ihr Verhalten gezielt prüfen. Hier findest du technische Beiträge und ausgearbeitete Projektkonzepte.',
        image: {
            src: '/hero.jpeg',
            alt: 'Alexander Tampier in einem Café',
            caption: 'Foto von Marjana J.T'
        },
        actions: [
            {
                text: 'Kontakt aufnehmen',
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
