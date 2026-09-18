<script setup lang="ts">
import Menu from '@/components/Menu.vue';
import ProblemDefinition from '@/components/ProblemDefinition.vue';
import WorkArea from '@/components/WorkArea.vue';
</script>

<template>
  <main class="h-screen w-screen p-5 flex flex-col gap-2">
    <Menu />
    <ProblemDefinition />
    <WorkArea class="grow min-h-[70vh]" />
  </main>
</template>

<style scoped></style>
