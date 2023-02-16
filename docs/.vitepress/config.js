export default {
  title: 'EllenLu',
  description: '日常记录',
  lastUpdated:true,
  cleanUrls:true,
  base:'/blog/',
  themeConfig:{
    siteTitle:'akunnnn',
    logo:'../logo.png',
    nav: [
      { text: '前端', link: '/frontEnd/test', activeMatch:'/frontEnd/' },
      { text: '碎念', link: '/murmur/a', activeMatch:'/murmur/'},
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar:{
      '/frontEnd/':[
        {
          text:'前端知识点',
          collapsed:false,
          items:[
            { text:'Index',link:'/frontEnd/test'},
          ]
        }
      ],
      '/murmur/':[
        {
          text:'碎碎念',
          collapsed:false,
          items:[
            { text:'first',link:'/murmur/a'},
            { text:'second',link:'/murmur/b'},
            { text:'third',link:'/murmur/test2'}
          ]
        }
      ]
    }
    

  }
}