import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
    links: [//{
        //     text: 'About Me',
        //     links: [{
        //             text: 'Sass',
        //             href: getPermalink('/landing/saas'),
        //         },
        //         // {
        //         //     text: 'Startup',
        //         //     href: getPermalink('/landing/startup'),
        //         // },
        //         // {
        //         //     text: 'Mobile App',
        //         //     href: getPermalink('/landing/mobile-app'),
        //         // },
        //     ],
        // },
        // // {
        // //     text: 'Pages',
        // //     links: [{
        // //             text: 'Features',
        // //             href: '#',
        // //         },
        //         // {
        //         //     text: 'Pricing',
        //         //     href: '#',
        //         // },
        //         // {
        //         //     text: 'About us',
        //         //     href: '#',
        //         // },
        //         // {
        //         //     text: 'Contact',
        //         //     href: '#',
        //         // },
        //         // {
        //         //     text: 'Terms',
        //         //     href: getPermalink('/terms'),
        //         // },
        //         // {
        //         //     text: 'Privacy policy',
        //         //     href: getPermalink('/privacy'),
        //         // },
        //     ],
        // },
        {
            text: 'Blog',
            href: getBlogPermalink(),
        },
        {
            text: 'Gallery',
            href: getPermalink('/gallery'),
        },
        {
            text: 'About Me',
            href: getPermalink('/about-me'),
        },
    ],
    // actions: [
    //     { type: 'button', text: 'Download', href: '#' }
    // ],
};

export const footerData = {
    links: [{
            title: 'Support',
            links: [
                { text: 'Docs', href: '#' },
                { text: 'Community Forum', href: '#' },
            ],
        },
        {
            title: 'Me',
            links: [
                { text: 'About', href: '#' },
                { text: 'Blog', href: '#' },
            ],
        },
    ],
    secondaryLinks: [
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    socialLinks: [
        { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/@phcadano' },
        { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/kuyaharveypol' },
        { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://fb.me/suarnaba.paulharvey' },
        { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
        { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/acropolis914' },
    ],
    footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};