<script setup>
// Components
import { Logo } from '../components/layout'

// Constants
import { footerLinks } from '../constants'

// Icons
import { IconFacebook, IconYoutube, IconInstagram } from '../components/icons'
</script>

<template>
  <footer class="container-xl">
    <div class="footer-wrapper section-xl">
      <div class="content">
        <Logo title="Bookshop" />

        <div class="empty-div" />

        <template v-for="link in footerLinks" :key="link.title">
          <div class="link-list-box">
            <h5 class="link-list-title">{{ link.title }}</h5>

            <ul>
              <li v-for="link in link.child" :key="link.title" class="link-item">
                <a :href="link.title" class="link">{{ link.title }}</a>
              </li>
            </ul>
          </div>
        </template>

        <div class="link-list-box">
          <h5 class="link-list-title social-list-title">Social</h5>

          <ul class="social-list">
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
                class="link"
              >
                <IconFacebook />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
                class="link"
              >
                <IconInstagram />
              </a>
            </li>

            <li>
              <a href="https://www.youtube.com/" target="_blank" aria-label="Youtube" class="link">
                <IconYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="subfooter">
        <hr class="divider" />

        <div class="subfooter-content">
          <div class="subfooter-link-group">
            <a href="#" class="link subfooter-item">Commercial Terms & Conditions</a>

            <a href="#" class="link subfooter-item">Privacy Policy</a>
          </div>

          <span class="subfooter-item">535 Mission St Fl 14 San Francisco, CA 94105</span>

          <span class="subfooter-item">Copyright © 2022 entrapeer, All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--color-border);
  padding-block: 40px;
}

.footer-wrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.content {
  display: grid;
  grid-template-columns: auto repeat(3, 1fr) auto;
}

.link-list-box {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.link-list-title {
  font-size: 18px;
  font-weight: 700;
}

.link-item {
  font-size: 14px;
  line-height: 30px;
  color: var(--color-text-secondary);
}

.link:visited {
  color: var(--color-primary);
}

.social-list {
  display: flex;
  gap: 48px;
}

.subfooter {
  display: flex;
  flex-direction: column;
  gap: 32px;
  font-size: 14px;
  line-height: 1.5;
}

.subfooter-content {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  font-family: var(--font-family-roboto);
}

.subfooter-link-group {
  display: flex;
  gap: 24px;
}

.subfooter-item {
  color: var(--color-text-muted-soft);
}

.divider {
  border: 0.5px solid var(--color-border);
}

@media (max-width: 1280px) {
  .content {
    grid-template-columns: repeat(4, 1fr);
    gap: 48px;
  }

  .empty-div {
    display: none;
  }

  .subfooter-content {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 1024px) {
  .content {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }

  .content > :first-child,
  :last-child {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .content > * {
    margin-inline: auto;
  }

  .social-list {
    gap: 24px;
  }

  .social-list-title {
    text-align: center;
  }
}
</style>
