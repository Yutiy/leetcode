const sidebar = require('./sidebar')

module.exports = {
  // 要部署的仓库名字
  base: '/',
  repo: 'Yutiy/blog',
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitLab 上编辑此页",
  lastUpdated: '更新于',
  noFoundPageByTencent: false,

  sidebar,
  sidebarDepth: 2,

  nav: [
    { text: 'leetcode', link: '/leetcode/' },
    { text: '设计模式', link: '/design_pattern/' },
    { text: '排序算法', link: '/bubble_sort/' },
    { text: '数据结构', link: '/queue/' },
    { text: 'thinking', link: '/thinking/complex/' },
  ]
}
