<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PhDotsSixVertical } from '@phosphor-icons/vue';
import FrontierAttribute from './FrontierAttribute.vue';

const props = defineProps<{
  item: {
    state: string,
    path: string,
    cost: number,
    heuristic: number,
  },
}>();
</script>

<template>
<Card class="gap-0 py-2">
  <CardHeader>
    <CardTitle class="flex flex-row gap-1 items-center justify-between">
      <span class="font-extrabold text-base">{{ item.state }}</span>
      <PhDotsSixVertical class="drag-handle cursor-grab" />
    </CardTitle>
  </CardHeader>
  <CardContent>
    <FrontierAttribute label="Path" :value="item.path" />
    <FrontierAttribute label="Cost" :value="item.cost.toString()" />
    <FrontierAttribute label="Heuristic" :value="item.heuristic.toString()" />
  </CardContent>
</Card>
</template>
