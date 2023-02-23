# NVM操作

## 切换node版本命令

菜单⇒命令提示符⇒管理员模式⇒切换node版本

`nvm use <version>`

指定文件夹打开cmd

## nvm操作

```jsx
安装最新稳定版 node，当前是 node v12.9.1 (npm v7.9.0)

$ nvm install stable
复制代码安装指定版本，可模糊安装，如：安装 v4.4.0，既可 $ nvm install v4.4.0，又可 $ nvm install 4.4

$ nvm install <version>
复制代码删除已安装的指定版本，语法与 install 用法一致

$ nvm uninstall <version>
复制代码切换使用指定的版本 node

// 临时版本 - 只在当前窗口生效指定版本
$ nvm use <version>

// 永久版本 - 所有窗口生效指定版本
$ nvm alias default <version>
```

```jsx
列出所有安装的版本

$ nvm ls
复制代码列出所有远程服务器的版本（官方 node version list）

$ nvm ls-remote
复制代码显示当前的版本

$ nvm current
复制代码给不同的版本号添加别名

$ nvm alias <name> <version>
复制代码删除已定义的别名

$ nvm unalias <name>
复制代码在当前版本 node 环境下，重新全局安装指定版本号的 npm 包

$ nvm reinstall-packages <version>
复制代码查看更多命令可在终端输入

$ nvm
```

如果nvm use 遇见乱码：cmd需要在管理员权限下打开

cmd在管理员权限下打开：win+r ⇒ cmd ⇒ ctrl+shift+enter

## npm操作

npm run dev：可通过localhost:3000监听

关闭：ctrl+c 和 ctrl+d