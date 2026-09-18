<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SequenceList from "./SequenceList.vue";
import TreeArea from "./TreeArea.vue";
import FrontierList from "./FrontierList.vue";
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex flex-row justify-between items-center">
        <span class="font-black">Work Area</span>
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
