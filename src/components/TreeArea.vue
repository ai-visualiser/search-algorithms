<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
import type { Node, Edge } from '@vue-flow/core'
import { VueFlow } from '@vue-flow/core'

const nodes: Node[] = [
  { id: 'node-1', position: { x: 0, y: 0 } },
  { id: 'node-2', position: { x: 100, y: 100 } },
]

const edges: Edge[] = [
  { id: 'edge-1', source: 'node-1', target: 'node-2' },
]
</script>

<template>
  <Card>
    <CardContent class="flex flex-row grow">
      <VueFlow :nodes="nodes" :edges="edges" class="bg-gray-50 rounded">
      </VueFlow>
    </CardContent>
  </Card>
</template>

<style>
/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';

/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
</style>
