<script setup>
// Components
import { IconMenu } from '../components/icons'
import { Logo } from '../components/layout'

// Icons
import { IconButton } from '../components/ui'

// Store
import { useLayoutStore } from '../stores/layout'

const layout = useLayoutStore()

const handleClick = () => {
  //   console.log('clicked')
  //   layout.toggleSidebar()
}
</script>

<template>
  <header class="header container-xl">
    <nav class="nav section-xl">
      <Logo />

      <IconButton aria-label="menu button" @click="handleClick">
        <IconMenu />
      </IconButton>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: none;
  padding-block: 12px;
  border-bottom: 1px solid var(--color-border);
}

.nav {
  flex: 1 1 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 38px;
}

@media (max-width: 1024px) {
  .header {
    display: flex;
  }
}
</style>
