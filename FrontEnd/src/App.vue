<script setup lang="ts">
const appTitle = 'Guitar Journey'
</script>

<template>
  <main class="home-page">
    <h1>{{ appTitle }}</h1>

    <nav>
      <RouterLink to="/">首页</RouterLink>
      <router-link to="/practice">曲谱练习</router-link>
      <router-link to="/record">学习记录</router-link>
    </nav>

    <RouterView />
  </main>
</template>

<style scoped>
.home-page {
  max-width: 720px;
  margin: 0 auto;
  padding: 32px;
}

.practice-card {
  margin-top: 16px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>