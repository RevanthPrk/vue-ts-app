<template>
  <div class="mt-4">
    <label class="mr-2 font-medium">{{ t('language') }}:</label>
    <select v-model="locale" class="border p-1 rounded">
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
</script>
