<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref } from 'vue';

const totalStepNumber = 20;
const currentStep = ref(Math.floor(Math.random() * totalStepNumber) + 1);
</script>

<template>
  <div class="flex flex-col items-center p-2 overflow-y-auto">
    <template v-for="step in totalStepNumber" :key="step">
      <Button variant="outline" class="rounded-full" size="icon"
        :class="{
          'bg-accent': step === currentStep,
          'border-primary': step === currentStep,
          'font-bold': step === currentStep
        }"
        @click="currentStep = step"
      >
        <span>{{ step }}</span>
      </Button>
      <span class="text-border" v-if="step !== totalStepNumber">|</span>
    </template>
  </div>
</template>
