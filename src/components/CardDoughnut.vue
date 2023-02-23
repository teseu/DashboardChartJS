<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from '../chartConfig.js'
import { defineProps } from 'vue'

const props = defineProps({
  chartData: {
    type: Object,
    default: () => ({})
  },
  chartOptions: {
    type: Object,
    default: () => ({})
  },
  chartColors: {
    type: Object,
  },
  chartLabels: {
    type: Array,
  },
  chartDatasets: {
    type: Array,
  },
  title: String,
  percentage: Number,
})

ChartJS.register(ArcElement, Tooltip, Legend)
</script>

<template>
  <div class="bg-card flex flex-col items-center shadow-dashBoard rounded-2xl w-[351px] h-[379px] py-7 px-12">
    <p class="font-semibold text-center text-2xl text-white">{{ props.title }}</p>
    <div class="flex flex-col items-center justify-center w-[200px] h-[200px] mt-8 relative">
      <Doughnut :data="chartConfig.data" :options="chartConfig.options" />
      <div class="absolute text-white">
        <p class="text-4xl leading-8 font-bold">{{ props.percentage }}%</p>
        <p class="text-base font-normal">alcançada</p>
      </div>
    </div>
    <p class="text-sm font-medium text-white mt-8">NPS Score <span class="font-normal">75</span></p>
  </div>
</template>
