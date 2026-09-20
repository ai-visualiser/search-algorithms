<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="flex flex-col items-center p-2 overflow-y-auto">
    <Button variant="outline" class="rounded-full" size="icon">
      <span>2</span>
    </Button>
    <span class="text-border">|</span>
    <Button variant="outline" class="rounded-full" size="icon">
      <span>20</span>
    </Button>
  </div>
</template>
