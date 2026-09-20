<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ButtonGroup } from '@/components/ui/button-group';

import { useDragAndDrop } from '@formkit/drag-and-drop/vue';
import FrontierItem from '@/components/Frontier/FrontierItem.vue';
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
    path: "a-c-b-a-b-c-a-b-c-a-b-c",
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
      <CardDescription>
        <div class="flex flex-row gap-1 items-center justify-between">
          <span>Sort by</span>
          <ButtonGroup>
            <Button variant="outline">Order</Button>
            <Button variant="outline">Cost</Button>
            <Button variant="outline">Heuristic</Button>
          </ButtonGroup>
        </div>
      </CardDescription>
    </CardHeader>
    <CardContent class="w-64">
      <div class="flex flex-col gap-2" ref="frontierList">
        <FrontierItem v-for="item in frontierItems" :key="item.path" :item="item" />
      </div>
    </CardContent>
  </Card>
</template>
