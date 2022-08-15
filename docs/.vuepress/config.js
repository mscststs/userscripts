const fs = require("fs")


module.exports = {
  lang: 'zh-CN',
  title: 'Scripts & Styles',
  description: '用户脚本分发',
  docsDir: 'docs',
  base: "/",
  port: 8080,

  markdown: {
    lineNumbers: true
  },


  themeConfig: {
    logo: '/logo.jpg',
    displayAllHeaders: true, // 默认值：false

    search: true,
    searchMaxSuggestions: 10,
    sidebarDepth: 0,

    lastUpdated: '最近更新', // string | boolean


    // smoothScroll: true, // 平滑滚动

    // Git 和编辑配置
    docsRepo: 'https://github.com/mscststs/userscripts',
    docsDir: 'docs',
    editLinkText: '编辑此页面',
    editLinks: true,

    nav:[
      { text: '首页', link: '/' },
      { text: '脚本', link: '/scripts/' },
      { text: '样式', link: '/styles/' },
      { text: 'Github', link: 'https://github.com/mscststs/userscripts'}
    ],
    displayAllHeaders: true, // 默认值：false
    sidebar: {
      '/scripts': [{
        title: "脚本",
        collapsable: false,
        children: getMenu('scripts')
      }],
      '/styles': [{
        title: "样式",
        collapsable: false,
        children: getMenu('styles')
      }],
      
      '/': [{
        title: "首页",
        collapsable: false,
        children: getMenu('')
      }]
    },
  }
  
}


function getMenu(dir) {
  let readDir = fs.readdirSync(`docs/${dir}`);
  // 排序， README 排在前面
  readDir.sort((a, b) => {
    if (a === 'README.md') {
      return -1;
    } else if (b === 'README.md') {
      return 1;
    } else {
      return 0;
    }
  });

  return readDir.filter(item=>item.endsWith(".md")).map(item => {
    return item.replace(".md", ""); // remove ext 
  }).map(item => {
    return item === "README" ? "" : item;
  }).map(encodeURI).map(item=>dir+"/"+item)
}