<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SequenceList from "@/components/SequenceList.vue";
import TreeArea from "@/components/TreeArea.vue";
import FrontierList from "@/components/FrontierList.vue";
import AlgorithmSelector from "@/components/AlgorithmSelector.vue";
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex flex-row justify-between items-center">
        <span class="font-black">Work Area</span>
        <AlgorithmSelector />
      </CardTitle>
    </CardHeader>
    <CardContent class="grow flex">
      <div class="flex flex-row grow gap-2 items-stretch">
        <SequenceList />
        <TreeArea class="grow" />
        <FrontierList />
      </div>
    </CardContent>
  </Card>
</template>
