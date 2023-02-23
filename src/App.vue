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
      <CardDoughnut title="Vendas fechadas" percentage="70" expected="100" reached="70" reached-s-v-g="/src/assets/label70.svg" width="w-[351px]" />
      <CardDoughnut title="Meta mensal" percentage="90" expected="R$ 70K" reached="R$ 63K" reached-s-v-g="/src/assets/label90.svg" width="w-[409px]" />
      
    </div>
  </main>
</template>

<style scoped></style>
