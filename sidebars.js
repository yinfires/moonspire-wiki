// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  wikiSidebar: [
    'intro',
    {
      type: 'category',
      label: '玩法资料',
      items: ['gameplay-overview'],
    },
    {
      type: 'category',
      label: '创作与界面',
      items: ['developer-tools', 'ui-animation'],
    },
  ],
};

export default sidebars;
