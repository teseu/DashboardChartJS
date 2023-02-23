<script setup lang="ts">
import CardImg from './components/CardImg.vue'
import CardDoughnut from './components/CardDoughnut.vue'
</script>

<template>
  <main>
    <div
      class="container w-[1366px] h-[975px] border border-slate-100 flex justify-between mx-auto mt-8 rounded-2xl bg-default py-28 px-32"
    >
      <CardImg />
      <CardDoughnut title="Vendas fechadas" percentage="70" expected="100" reached="70" reached-s-v-g="/src/assets/label70.svg" />
      <div class="bg-card flex flex-col items-center shadow-dashBoard rounded-2xl w-[409px] h-[379px] py-7 px-12">
        <p class="font-semibold text-center text-2xl text-white">Meta mensal</p>
        <div class="flex flex-col items-center justify-center w-[122px] h-48 mt-8">
          <img src="./assets/smile.svg" alt="smile face" />
          <p class="text-lime text-2xl leading-8 font-semibold mt-4">Excelente!</p>
        </div>
        <p class="text-sm font-medium text-white mt-8">NPS Score <span class="font-normal">75</span></p>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
