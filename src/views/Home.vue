<script setup lang="ts">
import { ref, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import TodoItem from '../components/TodoItem.vue'
import type { ITodo } from '../models/Todo'
import { Priority } from '@/enums/TodoPriority'
import { TodoStatus } from '@/enums/TodoStatus'

// const todos = ref<ITodo[]>([])
const todos = ref<ITodo[]>([])
const newTitle = ref('')
const selectedPriority = ref<Priority>(Priority.Medium)
const selectedStatus = ref<TodoStatus | null>(null)

const addTodo = ():ITodo => {
  return {
    id: uuidv4(),
    title: newTitle.value.trim(),
    completed: false,
    status: TodoStatus.Pending,
    priority: selectedPriority.value,
  }
  // if (!newTitle.value.trim()) return

  // todos.value.push({
  //   id: uuidv4(),
  //   title: newTitle.value.trim(),
  //   completed: false,
  //   status: TodoStatus.Pending,
  //   priority: selectedPriority.value,
  // })

  // newTitle.value = ''
  // selectedPriority.value = Priority.Medium
}

const toggleTodo = (id: string):void => {
  const todo = todos.value.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
    todo.status = todo.completed ? TodoStatus.Done : TodoStatus.InProgress
  }
}

const deleteTodo = (id: string) => {
  todos.value = todos.value.filter(t => t.id !== id)
}

const filteredTodos = computed(() => {
  if (!selectedStatus.value) return todos.value
  return todos.value.filter(todo => todo.status === selectedStatus.value)
})
</script>

<template>
  <div class="max-w-xl mx-auto mt-10 p-4">
    <h1 class="text-3xl font-bold mb-4 text-center">📝 Todo App</h1>

    <form @submit.prevent="addTodo" class="flex flex-col sm:flex-row gap-2 mb-4">
      <input
        v-model="newTitle"
        type="text"
        placeholder="Enter a new task"
        class="flex-1 border rounded p-2"
      />

      <select v-model="selectedPriority" class="border rounded p-2">
        <option v-for="p in Object.values(Priority)" :key="p" :value="p">{{ p }}</option>
      </select>

      <button type="submit" class="bg-blue-600 text-white rounded px-4 py-2">Add</button>
    </form>

    <div class="mb-4">
      <label for="filter" class="text-sm font-semibold mr-2">Filter by Status:</label>
      <select v-model="selectedStatus" class="border rounded p-2">
        <option :value="null">All</option>
        <option v-for="s in Object.values(TodoStatus)" :key="s" :value="s">{{ s }}</option>
      </select>
    </div>

    <ul>
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggle="toggleTodo"
        @delete="deleteTodo"
      />
    </ul>
  </div>
</template>
