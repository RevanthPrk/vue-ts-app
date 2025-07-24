<!-- <script setup lang="ts">
import Home from './views/Home.vue'
</script>

<template>
  <Home />
</template> -->

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">{{ t('welcome') }}</h1>
    <p class="mt-2">{{ t('message') }}</p>

    <LanguageSwitcher />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './components/LanguageSwitcher.vue';

const { t } = useI18n()
</script>

