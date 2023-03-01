<template>
  <div>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-10">
      <div v-for="item in store.stats" :key="item" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">{{ item.name }}</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{{ item.value }}</dd>
      </div>
    </dl>
    <div class="mt-5">
      <button @click="store.addMoney(100)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
        Add money
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useGameStore } from '@/stores/game'
  const store = useGameStore()
</script>