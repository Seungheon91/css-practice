/* 일반적인 layout */
<template>
  <div class="wrap">
    <header></header>
    <nav></nav>
    <aside></aside>
    <section></section>
    <footer></footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.wrap {
  width: 1000px;
  margin: 0 auto;
}
header {
  width: 1000px;
  height: 100px;
  background: #111;
}
nav {
  width: 1000px;
  height: 100px;
  background: #222;
}
aside {
  float: left;
  width: 300px;
  height: 600px;
  background: #333;
}
section{
  float: left;
    width: 700px;
    height: 600px;
    background: #444;
}
footer {
  clear: both;
  width: 1000px;
  height: 100px;
  background: #555;
}
</style>