<script setup lang="ts">
import { Select, SelectTrigger, SelectContent, SelectValue, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { ref } from 'vue'

const algorithms = [
  {
    name: 'Uninformed',
    items: [
      { value: 'bfs', label: 'Breadth First Search (BFS)' },
      { value: 'dfs', label: 'Depth First Search (DFS)' },
    ]
  },
  {
    name: 'Informed',
    items: [
      { value: 'ucs', label: 'Uniform Cost Search (UCS)' },
      { value: 'astar', label: 'A* Search' },
    ]
  }
]
const selected = ref(algorithms[0]?.items[0]?.value)
</script>

<template>
  <Select v-model="selected">
    <SelectTrigger>
      <SelectValue placeholder="Select algorithm" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup v-for="group in algorithms" :key="group.name">
        <SelectLabel>{{ group.name }}</SelectLabel>
        <SelectItem v-for="item in group.items" :key="item.value" :value="item.value">
          {{ item.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
