<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from '../chartConfig.js'
import { defineProps } from 'vue'

const props = defineProps({
  chartColors: {
    type: Object,
  },
  chartDatasets: {
    type: Array,
  },
  title: String,
  percentage: String,
  expected: String,
  reachedSVG: String,
  reached: String,
  width: String,
})

ChartJS.register(ArcElement, Tooltip, Legend)
</script>

<template>
  <div class="bg-card flex flex-col items-center shadow-dashBoard rounded-2xl h-[379px] py-7 px-12" :class="props.width">
    <p class="font-semibold text-center text-2xl text-white">{{ props.title }}</p>
    <div class="flex flex-col items-center justify-center w-[200px] h-[200px] mt-8 relative">
      <Doughnut :data="chartConfig.data" :options="chartConfig.options" />
      <div class="absolute text-white">
        <p class="text-4xl leading-8 font-bold">{{ props.percentage }}%</p>
        <p class="text-base font-normal">alcançada</p>
      </div>
    </div>
    <p class="text-sm font-medium text-white flex justify-between w-full mt-8">
    <div class="inline-block">
        <img class="inline-block" src="../assets/labelEsperado.svg" alt="label esperado">
      Esperado <span class="font-normal ml-2"> {{ props.expected }}</span>
    </div>
    <div class="inline-block">
        <img class="inline-block" :src="props.reachedSVG" alt="label alcançado">
      Alcançado <span class="font-normal ml-2"> {{ props.reached }}</span>
    </div>
    </p>
  </div>
</template>
