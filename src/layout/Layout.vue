<script setup>
// Partials
import Footer from './Footer.vue'
import HeaderDesktop from './HeaderDesktop.vue'
import HeaderMobile from './HeaderMobile.vue'
import Sidebar from './Sidebar.vue'
</script>

<template>
  <Sidebar />

  <div class="layout">
    <HeaderDesktop />
    <HeaderMobile />

    <div class="wrapper">
      <slot />
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.wrapper {
  flex: 1 1 0%;
}
</style>
