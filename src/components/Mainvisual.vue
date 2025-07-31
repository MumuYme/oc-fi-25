<template>
  <div class="relative">

    <img 
      :src="mobileImg" 
      alt="モバイル用のメインビジュアル" 
      class="w-screen block md:hidden h-auto"
    >


    <!-- <div class="animate-pulse" role="status">
      <div class="w-screen block md:hidden h-auto items-center justify-cente bg-gray-300 rounded-sm sm:w-96 dark:bg-gray-700">
          <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
          </svg>
      </div>
    </div> -->


    <img 
      :src="pcImg" 
      alt="PC用のメインビジュアル" 
      class="hidden md:block w-screen h-auto"
    >

    <div class="absolute top-0 left-0 w-full h-full flex flex-col pl-8 pt-17 md:p-12 font-kiwi text-white">
      <p class="text-2xl drop-shadow-xl/80 md:text-6xl font-bold">TDU</p>
      <p class="text-2xl drop-shadow-xl/80 mt-2.5 md:text-6xl font-medium">未来科学部</p>
      <p class="text-4xl drop-shadow-xl/80 md:text-6xl font-medium">情報メディア学科</p>
      <!-- <p class="text-6xl block md:hidden font-medium">Open</p>
      <p class="text-6xl block md:hidden font-medium">Campus</p>
      <p class="text-6xl hidden md:block font-medium">Open Campus</p> -->
    </div>
    
  </div>
</template>

<script setup>
import mobileImg from '../assets/mainvisual-mobile.jpeg'
import pcImg from '../assets/mainvisual.jpeg'
</script>

<style scoped>

</style>