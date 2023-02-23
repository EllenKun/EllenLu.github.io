export default {
  title: 'akun',
  description: '日常记录',
  lastUpdated:true,
  cleanUrls:true,
  base:'/blog/',
  themeConfig:{
    siteTitle:'堃堃堃困困kunnnn',
    logo:'/kun-logo.png',
    nav: [
      { text: '前端', link: '/frontEnd/test', activeMatch:'/frontEnd/' },
      { text: '碎念', link: '/murmur/a', activeMatch:'/murmur/'},
      // {
      //   text: '记性好差',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // }
    ],
    sidebar:{
      '/frontEnd/':[
        {
          text:'前端知识点',
          collapsed:false,
          items:[
            { text:'NVM操作',link:'/frontEnd/nvmDirect'},
          ]
        }
      ],
      '/murmur/':[
        {
          text:'碎碎念',
          collapsed:false,
          items:[
            { text:'一个标题',link:'/murmur/a'},
          ]
        }
      ]
    }
    

  }
}
