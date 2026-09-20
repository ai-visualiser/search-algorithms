<script setup lang="ts">
defineProps<{
  label: string,
  value: string,
}>();
</script>
<template>
  <div class="flex flex-row justify-between items-start gap-1">
    <div class="">{{ label }}</div>
    <div class="text-wrap text-end font-semibold">{{ value }}</div>
  </div>
</template>
