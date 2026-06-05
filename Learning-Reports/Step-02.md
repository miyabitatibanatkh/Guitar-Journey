# Step 2 学习报告：首页基础内容展示

## 本次完成内容

本次完成了 Guitar Journey 的首页基础内容展示。

已经完成的关键动作：

1. 替换 Vite 默认页面
2. 显示项目标题 `Guitar Journey`
3. 添加“今日练习”内容区
4. 添加“曲谱练习”内容区
5. 添加“学习记录”内容区
6. 初步练习 Vue 单文件组件结构

## 本 Step 学到的重点

Vue 单文件组件通常由三个部分组成：

```vue
<script setup lang="ts"></script>
<template></template>
<style scoped></style>
```

`script` 用来写页面需要的数据和逻辑。

`template` 用来写页面显示出来的结构。

`style` 用来写页面样式。

`{{ appTitle }}` 是 Vue 的插值语法，意思是把变量 `appTitle` 的值显示到页面上。

`class` 可以给 HTML 元素添加样式名称，然后在 `style` 中通过这个名称设置样式。

## 本 Step 成果

首页已经不再显示 Vite 默认内容，而是显示 Guitar Journey 的基础首页。

页面包含：

1. 项目标题
2. 今日练习
3. 曲谱练习
4. 学习记录

## Commit 文本建议

```text
Add basic home page layout
```

## 下一步

下一步进入 Step 3：导航菜单。

Step 3 的目标是安装并使用 Vue Router，让页面可以通过导航菜单切换不同内容。
