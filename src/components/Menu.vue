<script setup lang="ts">
import { Menubar, MenubarMenu, MenubarContent, MenubarTrigger } from '@/components/ui/menubar';
</script>

<template>
  <Menubar class="justify-between">
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
    </MenubarMenu>
    <span class="text-sm font-black mx-2">Search Algorithms</span>
  </Menubar>
</template>

<style scoped></style>
