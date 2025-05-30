<script setup>
// Store
import { useModalStore } from '../stores/modal'
// Components
import { DesktopNavLink, Logo } from '../components/layout'
import { Button } from '../components/ui'

const modal = useModalStore()
</script>

<template>
  <div class="container-xl">
    <header class="header section-xl">
      <nav class="nav">
        <Logo />

        <div class="nav-link-list">
          <DesktopNavLink title="About" to="/about" />

          <DesktopNavLink title="Books" to="/" />
        </div>
      </nav>

      <div class="btn-group">
        <Button is-outline size="lg" @click="modal.openModal('book-entry-modal')"
          >Add book form</Button
        >

        <Button size="lg">Login</Button>
      </div>
    </header>
  </div>
</template>

<style scoped>
.header {
  padding-block: 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  border-bottom: 1px solid var(--color-border);
}

.nav {
  display: flex;
  align-items: center;
  gap: 60px;
}

.nav-link-list {
  display: flex;
  align-items: center;
  gap: 12px;
}

.btn-group {
  display: flex;
  gap: 20px;
}

@media (max-width: 1024px) {
  .header {
    display: none;
  }
}
</style>
