<script setup>
// Partials
import Footer from './Footer.vue'
import HeaderDesktop from './HeaderDesktop.vue'
import HeaderMobile from './HeaderMobile.vue'
import Sidebar from './Sidebar.vue'

// Modals
import Modal from '../modals/Modal.vue'
</script>

<template>
  <Sidebar />

  <Modal />

  <div class="layout">
    <HeaderDesktop />
    <HeaderMobile />

    <main class="wrapper container-lg">
      <slot />
    </main>

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
