
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)


const config: Config = {
  title: 'Centrum Info',
//  tagline: 'Materiale didactice',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    faster: true,
  },

  // Set the production url of your site here
  url: 'https://lucidumitru.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/centrum/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lucidumitru', // Usually your GitHub org/user name.
  projectName: 'centrum', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],





  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
/*        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
*/
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
/*          cacheTime: 600 * 1000, // 600 sec - cache purge period */
          changefreq: 'weekly',
          priority: 0.5,
        },



      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Centrum Info',
      logo: {
        alt: 'My Site Logo',
/*        src: 'img/logo.svg', */
          src: 'img/centrum_logo_svg_final.svg',
            width: 50,
            height: 50,
      },
      items: [

/*
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Truse Experimente',
        },
        {to: '/blog', label: 'Blog', position: 'left'},

*/
        {to: '/docs/invatamant-primar/produse-centrum-invatamant-primar', label: 'Învățământ primar', position: 'left'},
        {to: '/docs/invatamant-gimnazial/produse-centrum-invatamant-gimnazial', label: 'Învățământ gimnazial', position: 'left'},
        {to: '/docs/invatamant-liceal/produse-centrum-invatamant-liceal', label: 'Învățământ Liceal', position: 'left'},

        {
          href: 'https://www.drugon.ro',
          label: 'Magazin Online',
          position: 'right',
        },

      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Centrum Info',
          items: [
            {
              label: 'Ce vă oferă Centrum Info',
              to: '/docs/produse-centrum',
            },
          ],
        },
        {
          title: 'Drugon',
          items: [
            {
              label: 'Magazin Online',
              href: 'https://www.drugon.ro',
            },
/*
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
*/
          ],
        },
/*
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },

            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
 */
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Centrum`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
