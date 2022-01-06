const sidebar = require('./sidebar')

module.exports = {
  // 要部署的仓库名字
  base: '/',
  repo: 'https://github.com/Yutiy/leetcode',
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: '更新于',
  noFoundPageByTencent: false,

  // 备案
  record: '粤ICP备19122381号',
  recordLink: 'https://beian.miit.gov.cn/#/Integrated/index',

  sidebar,
  sidebarDepth: 2,

  nav: [
    {
      text: 'leetcode',
      items: [
        { text: '字符串', link: '/string/12.integer-to-roman/' },
        { text: '数组', link: '/array/14.longest-common-prefix/' },
        { text: '栈和队列', link: '/stack-queue/20.valid-parentheses/' },
        { text: '链表', link: '/linked-list/2.add-two-numbers/' },
        { text: '哈希表', link: '/hash-table/1.two-sum/' },
        { text: '二分查找', link: '/binary-search/33.search-in-rotated-sorted-array/' },
        { text: '回溯', link: '/backtrack/17.letter-combinations-of-a-phone-number/' },
        { text: '双指针', link: '/double-pointer/11.container-with-most-water/' },
        { text: '堆', link: '/heap/215.kth-largest-element-in-an-array/' },
        { text: '树', link: '/tree/94.binary-tree-inorder-traversal/' },
        { text: '滑动窗口', link: '/sliding-window/3.longest-substring-without-repeating-characters/' },
        { text: '动态规划', link: '/dp/5.longest-palindromic-substring/' },
        { text: '贪心', link: '/greedy/55.jump-game/' },
        { text: '其他', link: '/other/7.reverse-integer/' },
      ]
    },
    { text: 'thinking', link: '/thinking/complex/' },
  ]
}
