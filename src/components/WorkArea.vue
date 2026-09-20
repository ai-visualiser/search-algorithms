<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SequenceList from "@/components/SequenceList.vue";
import TreeArea from "@/components/TreeArea.vue";
import FrontierList from "@/components/FrontierList.vue";
import AlgorithmSelector from "@/components/AlgorithmSelector.vue";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ref, computed } from "vue";

const displayMode = ref('working')

function toggleDisplayMode() {
  displayMode.value = displayMode.value === 'working' ? 'solution' : 'working'
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex flex-row items-center gap-2">
        <span class="font-black">Work Area</span>
        <span class="grow"></span>
        <AlgorithmSelector />
        <div class="flex flex-row gap-1 items-center">
          <Button variant="ghost" @click="displayMode = 'working'">Working</Button>
          <Switch id="display-mode" @click="toggleDisplayMode" :modelValue="displayMode === 'solution'" />
          <Button variant="ghost" @click="displayMode = 'solution'">Solution</Button>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent class="grow flex overflow-y-auto py-0.5">
      <div class="flex flex-row grow gap-2 items-stretch">
        <SequenceList />
        <TreeArea class="grow" />
        <FrontierList />
      </div>
    </CardContent>
  </Card>
</template>
