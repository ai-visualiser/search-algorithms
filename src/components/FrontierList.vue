<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ref } from 'vue';
import { useDragAndDrop } from '@formkit/drag-and-drop/vue';
const frontiers = [
  {
    state: "a",
    path: "a-b-a",
    cost: 10,
    heuristic: 5,
  },
  {
    state: "b",
    path: "a-c-b",
    cost: 5,
    heuristic: 9,
  },
  {
    state: "c",
    path: "a-b-c",
    cost: 8,
    heuristic: 3,
  },
];
const [frontierList, frontierItems] = useDragAndDrop(frontiers, {
  dragHandle: ".drag-handle"
});
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Frontier List</CardTitle>
    </CardHeader>
    <CardContent class="min-w-[200px] max-w-0.5">
      <div class="flex flex-col gap-2" ref="frontierList">
        <template v-for="item in frontierItems" :key="item">
          <Card>
            <CardHeader>
              <CardTitle class="drag-handle">{{ item.state }}</CardTitle>
            </CardHeader>
            <CardContent>
              <div>{{ item.path }}</div>
              <div>{{ item.cost }}</div>
              <div>{{ item.heuristic }}</div>
            </CardContent>
          </Card>
        </template>
      </div>
    </CardContent>
  </Card>
</template>
