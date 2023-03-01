<template>
  <div>
    <div class="font-semibold text-2xl text-gray-900 mt-5">
      Printer Store
    </div>
    <dl class="grid grid-cols-1 gap-5 sm:grid-cols-10">
      <div v-for="item in store.availablePrinters" :key="item.name" class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-semibold text-gray-900">{{ item.name }}</dt>
        <dd class="mt-1 tracking-tight text-gray-600">Costs ${{ item.cost }}</dd>
        <dt class="truncate text-sm font-medium text-gray-500">{{ item.speed }}</dt>
        <dt class="truncate text-sm font-medium text-gray-500">{{ item.warmup_time }}</dt>
        <dt class="truncate text-sm font-medium text-gray-500">{{ item.cooldown_time }}</dt>
        <dt class="truncate text-sm font-medium text-gray-500">{{ item.power_usage }}</dt>
        <dt class="truncate text-sm font-medium text-gray-500">{{ item.reliability }}</dt>
        <button @click="store.buyPrinter(item)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Buy
        </button>
      </div>
    </dl>
  </div>
</template>

<script lang="ts" setup>
  import { useGameStore } from '@/stores/game'
  const store = useGameStore()
</script>