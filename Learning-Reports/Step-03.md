# Step 3 学习报告：导航菜单

## 本次完成内容

本次完成了 Guitar Journey 的基础导航菜单和路由配置。

已经完成的关键动作：

1. 安装 `vue-router`
2. 创建 `src/router/index.ts`
3. 在 `main.ts` 中注册 router
4. 在 `App.vue` 中添加导航菜单
5. 使用 `RouterLink` 切换页面
6. 使用 `RouterView` 显示当前页面内容

## 本 Step 学到的重点

`Vue Router` 是 Vue 项目中负责页面切换的工具。

`routes` 用来配置路径和页面的对应关系。

例如：

```ts
{ path: '/practice', component: PracticePage }
```

意思是：当浏览器路径是 `/practice` 时，显示 `PracticePage` 页面内容。

`RouterLink` 用来生成页面跳转链接。

例如：

```vue
<RouterLink to="/practice">曲谱练习</RouterLink>
```

这里的 `to="/practice"` 必须和路由配置里的 `path: '/practice'` 保持一致。

`RouterView` 用来显示当前路由对应的页面内容。

## 本次遇到的问题

一开始在 `router/index.ts` 中使用了这种写法：

```ts
const HomePage = {
  template: '<div>首页</div>',
}
```

这个写法在当前 Vite + Vue 项目中不能正常工作。

原因是：`.vue` 文件里的 `<template>` 会被 Vite 提前编译，但是 `router/index.ts` 中的字符串模板不会被提前编译。

所以临时改成了：

```ts
import { h } from 'vue'

const HomePage = {
  render: () => h('div', '首页'),
}
```

`h('div', '首页')` 的意思是：用 JavaScript 创建一个 `<div>首页</div>`。

这是 Step 3 的临时写法。Step 4 会正式创建 `.vue` 页面文件，到时候就不需要继续用 `h()` 写页面内容。

## 本 Step 成果

项目已经具备基础页面切换能力。

当前路由包括：

1. `/`：首页
2. `/practice`：曲谱练习
3. `/record`：学习记录

## Commit 文本建议

```text
Add basic Vue Router navigation
```

## 下一步

下一步进入 Step 4：创建页面。

Step 4 会创建正式的页面文件：

1. Home
2. Practice
3. Song
4. Record

之后路由会指向这些 `.vue` 文件，而不是临时对象。
