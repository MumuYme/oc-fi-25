<template>
  <div class="relative">

    <img 
      :src="mobileImg" 
      alt="モバイル用のメインビジュアル" 
      class="w-screen block md:hidden h-auto"
    >
    <img 
      :src="pcImg" 
      alt="PC用のメインビジュアル" 
      class="hidden md:block w-screen h-auto"
    >

    <div class="absolute top-0 left-0 w-full h-full flex flex-col p-8 md:p-12 text-white font-kiwi">
      <p class="text-6xl md:text-6xl font-bold">TDU</p>
      <p class="text-6xl md:text-6xl font-medium">FI</p>
      <p class="text-6xl block md:hidden font-medium">Open</p>
      <p class="text-6xl block md:hidden font-medium">Campus</p>
      <p class="text-6xl hidden md:block font-medium">Open Campus</p>
    </div>
    
  </div>
</template>

<script setup>
import mobileImg from '../assets/mainvisual-mobile.jpeg'
import pcImg from '../assets/mainvisual.jpeg'
</script>

<style scoped>
/* 文字に少し影をつけて見やすくする例 */
.text-white {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>