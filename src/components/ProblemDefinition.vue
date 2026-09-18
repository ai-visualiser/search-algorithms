<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PhCaretDown, PhCaretUp } from '@phosphor-icons/vue';
import { Button } from '@/components/ui/button';
import { ref } from 'vue';

const collapsed = ref(false);

</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex flex-row justify-between items-center">
        <span class="font-black">Problem Definition</span>
        <Button variant="ghost" @click="collapsed = !collapsed"><PhCaretUp v-if="!collapsed" /><PhCaretDown v-else /></Button>
      </CardTitle>
    </CardHeader>
    <CardContent v-if="!collapsed">
      <span class="font-black">Problem Definition</span>
    </CardContent>
  </Card>
</template>
