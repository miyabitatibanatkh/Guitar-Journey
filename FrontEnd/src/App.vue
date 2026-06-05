<script setup lang="ts">
const appTitle = 'Guitar Journey'
</script>

<template>
  <main class="home-page">
    <h1>{{ appTitle }}</h1>

    <section class="practice-card">
      <h2>今日练习</h2>
      <p>和弦转换练习 20 分钟</p>
    </section>

    <section class="practice-card">
      <h2>曲谱练习</h2>
      <p>选择一首歌曲，开始今天的练习。</p>
    </section>

    <section class="practice-card">
      <h2>学习记录</h2>
      <p>查看最近的练习时间、曲目和熟练度。</p>
    </section>
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