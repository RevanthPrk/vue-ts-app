<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'
import type { ITodo } from '../models/Todo'
const text = ref('revanth')
const props = defineProps<{
  todo: ITodo
}>()

const emit = defineEmits<{
  (e: 'toggle', id: string): void
  (e: 'delete', id: string): void
}>()

const toggleTodo = () => emit('toggle', props.todo.id)
const deleteTodo = () => emit('delete', props.todo.id)
</script>

<template>
  <li class="flex flex-col border-b py-2">
    <div class="flex justify-between items-center">
      <span
        :class="{ 'line-through': todo.completed }"
        @click="toggleTodo"
        class="cursor-pointer font-medium"
      >
        {{ todo.title }}
      </span>
      <button @click="deleteTodo" class="text-red-600 font-bold">X</button>
    </div>
    <div class="text-sm text-gray-600 mt-1">
      Status: <strong>{{ todo.status }}</strong> |
      Priority: <strong>{{ todo.priority }}</strong>
    </div>
  </li>
</template>
