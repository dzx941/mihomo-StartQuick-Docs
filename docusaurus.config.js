import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mihomo 小小白文档',
  tagline: '用人话理解 Mihomo',
  favicon: 'img/favicon.svg',

  url: 'mihomo.qd.je',
  baseUrl: '/',

  organizationName: 'example',
  projectName: 'mihomo-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          showLastUpdateTime: false,
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.svg',
    navbar: {
      title: 'Mihomo 小小白文档',
      logo: {
        alt: 'Mihomo 小小白文档',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '文档',
        },
        {
          href: 'https://github.com/MetaCubeX/mihomo',
          label: 'Mihomo',
          position: 'right',
        },
        {
          href: 'https://github.com/dzx941/mihomo-StartQuick-Docs',
          label: '文档 Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '开始阅读',
          items: [
            {label: '小小白白话文', to: '/level-0/'},
            {label: '快速开始', to: '/getting-started/'},
            {label: '配置参考', to: '/config/'},
          ],
        },
        {
          title: '相关项目',
          items: [
            {label: 'Mihomo', href: 'https://github.com/MetaCubeX/mihomo'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mihomo 小小白`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['yaml', 'bash', 'json'],
    },
  },
};

export default config;