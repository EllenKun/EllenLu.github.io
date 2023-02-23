import{_ as s,c as n,o as a,a as l}from"./app.7fc89ebe.js";const A=JSON.parse('{"title":"NVM操作","description":"","frontmatter":{},"headers":[{"level":2,"title":"切换node版本命令","slug":"切换node版本命令","link":"#切换node版本命令","children":[]},{"level":2,"title":"nvm操作","slug":"nvm操作-1","link":"#nvm操作-1","children":[]},{"level":2,"title":"npm操作","slug":"npm操作","link":"#npm操作","children":[]}],"relativePath":"frontEnd/nvmDirect.md","lastUpdated":null}'),p={name:"frontEnd/nvmDirect.md"},e=l(`<h1 id="nvm操作" tabindex="-1">NVM操作 <a class="header-anchor" href="#nvm操作" aria-hidden="true">#</a></h1><h2 id="切换node版本命令" tabindex="-1">切换node版本命令 <a class="header-anchor" href="#切换node版本命令" aria-hidden="true">#</a></h2><p>菜单⇒命令提示符⇒管理员模式⇒切换node版本</p><p><code>nvm use &lt;version&gt;</code></p><p>指定文件夹打开cmd</p><h2 id="nvm操作-1" tabindex="-1">nvm操作 <a class="header-anchor" href="#nvm操作-1" aria-hidden="true">#</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">安装最新稳定版 node，当前是 node v12</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">9.1</span><span style="color:#A6ACCD;"> (npm v7</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">9.0</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm install stable</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码安装指定版本，可模糊安装，如：安装 v4</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4.0</span><span style="color:#A6ACCD;">，既可 $ nvm install v4</span><span style="color:#89DDFF;">.</span><span style="color:#F78C6C;">4.0</span><span style="color:#A6ACCD;">，又可 $ nvm install </span><span style="color:#F78C6C;">4.4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm install </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码删除已安装的指定版本，语法与 install 用法一致</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm uninstall </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码切换使用指定的版本 node</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 临时版本 - 只在当前窗口生效指定版本</span></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm use </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 永久版本 - 所有窗口生效指定版本</span></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm alias </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">列出所有安装的版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm ls</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码列出所有远程服务器的版本（官方 node version list）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm ls</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">remote</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码显示当前的版本</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm current</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码给不同的版本号添加别名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm alias </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码删除已定义的别名</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm unalias </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码在当前版本 node 环境下，重新全局安装指定版本号的 npm 包</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm reinstall-packages </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">version</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">复制代码查看更多命令可在终端输入</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ nvm</span></span>
<span class="line"></span></code></pre></div><p>如果nvm use 遇见乱码：cmd需要在管理员权限下打开</p><p>cmd在管理员权限下打开：win+r ⇒ cmd ⇒ ctrl+shift+enter</p><h2 id="npm操作" tabindex="-1">npm操作 <a class="header-anchor" href="#npm操作" aria-hidden="true">#</a></h2><p>npm run dev：可通过localhost:3000监听</p><p>关闭：ctrl+c 和 ctrl+d</p>`,13),o=[e];function t(c,r,i,C,D,y){return a(),n("div",null,o)}const m=s(p,[["render",t]]);export{A as __pageData,m as default};
