// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Moon Spire Wiki',
  tagline: '牌组构筑式卡牌战斗与爬塔玩法资料库',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://moonspire-wiki.local',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yinfires',
  projectName: 'moonspire-wiki',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/moonspire/moonspire_icon.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Moon Spire',
        logo: {
          alt: 'Moon Spire Logo',
          src: 'img/moonspire/moonspire_icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki',
          },
          {to: '/docs/gameplay-overview', label: '玩法概览', position: 'left'},
          {to: '/docs/developer-tools', label: '创作者工具', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: '项目总览',
                to: '/docs/intro',
              },
              {
                label: '玩法概览',
                to: '/docs/gameplay-overview',
              },
              {
                label: '界面与反馈',
                to: '/docs/ui-animation',
              },
            ],
          },
          {
            title: '资料分类',
            items: [
              {
                label: '适用版本',
                to: '/docs/intro#适用版本',
              },
              {
                label: '房间编辑',
                to: '/docs/developer-tools#房间编辑',
              },
            ],
          },
          {
            title: '快速入口',
            items: [
              {
                label: '战斗系统',
                to: '/docs/gameplay-overview#战斗流程',
              },
              {
                label: '怪物池',
                to: '/docs/developer-tools#怪物池',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Moon Spire Wiki. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
