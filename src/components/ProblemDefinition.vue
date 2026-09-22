<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PhCaretDown, PhCaretUp } from '@phosphor-icons/vue';
import { Button } from '@/components/ui/button';
import { ref } from 'vue';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectItemText } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const collapsed = ref(false);

const problems = [{
  id: "romania",
  name: "Romania Problem"
}, {
  id: "vacuum",
  name: "Vacuum World"
}]
const selectedProblem = ref(problems[0]);
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="flex flex-row items-center gap-2">
        <span class="font-black">Problem Definition</span>
        <Select v-model="selectedProblem">
          <SelectTrigger class="w-xs">
            <SelectValue placeholder="Select a problem" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem v-for="problem in problems" :key="problem.id" :value="problem">
              <SelectItemText>{{ problem.name }}</SelectItemText>
            </SelectItem>
            <SelectItem value="custom">
              <SelectItemText>Custom</SelectItemText>
            </SelectItem>
          </SelectContent>
        </Select>
        <Button class="ml-auto" variant="ghost" @click="collapsed = !collapsed"><PhCaretUp v-if="!collapsed" /><PhCaretDown v-else /></Button>
      </CardTitle>
    </CardHeader>
    <CardContent v-if="!collapsed">
      <Tabs default-value="state">
        <TabsList>
          <TabsTrigger value="state">State</TabsTrigger>
          <TabsTrigger value="action">Action</TabsTrigger>
          <TabsTrigger value="cost">Cost</TabsTrigger>
          <TabsTrigger value="heuristic">Heuristic</TabsTrigger>
        </TabsList>
        <TabsContent v-for="tab in ['state', 'action', 'cost', 'heuristic']" :key="tab" :value="tab">
          <span class="font-black">{{ tab }}</span>
          <span class="">{{ selectedProblem?.name }}</span>
        </TabsContent>
      </Tabs>
    </CardContent>
  </Card>
</template>
