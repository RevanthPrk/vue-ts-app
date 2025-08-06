<!-- <script setup lang="ts">
import Home from './views/Home.vue'
</script>

<template>
  <Home />
</template> -->

<!-- <template>
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
</script> -->


<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">{{ t('welcome') }}</h1>
    <p class="mt-2">{{ t('message') }}</p>

    <!-- Dynamic Parameters -->
    <p class="mt-2">{{ t('greetUser', { name: 'Revanth' }) }}</p>

    <!-- Pluralization -->
    <p class="mt-2">{{ t('unread', { count: messageCount }) }}</p>

    <!-- Number Formatting -->
    <p class="mt-2">
      {{ t('price', { amount: n(123456.78, 'currency') }) }}
    </p>

    <!-- Date Formatting -->
    <p class="mt-2">
      {{ t('today', { date: d(new Date(), 'short') }) }}
    </p>

    <LanguageSwitcher />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const { t, n, d } = useI18n()
const messageCount = 2
</script>


