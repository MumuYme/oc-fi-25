<template>
  <div class="relative w-screen h-auto">
    <div class="relative w-full overflow-hidden hero-wave-container">
      <img 
        :src="mobileImg" 
        alt="モバイル用のメインビジュアル" 
        class="w-full block md:hidden h-auto"
      >
      <img 
        :src="pcImg" 
        alt="PC用のメインビジュアル" 
        class="w-full hidden md:block h-auto"
      >
      
      <div class="absolute top-0 left-0 w-full h-full flex flex-col pl-8 pt-17 md:p-12 font-kiwi text-white bg-gradient-to-tl from-blue-700/30 via-blue-400/30">
        <p class="text-2xl drop-shadow-xl/40 mt-12 md:text-6xl font-medium">未来科学部</p>
        <p class="text-4xl drop-shadow-xl/40 md:text-6xl font-medium">情報メディア学科</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import mobileImg from '../assets/mainvisual-mobile.png'
import pcImg from '../assets/mainvisual.png'
</script>
<style scoped>
.hero-wave-container {
position: relative;
overflow: hidden;

/* SVGをマスク画像として使用。pathのd属性を調整 */
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M 0 0 L 0 80 C 50 120 50 50 100 90 L 100 0 Z' fill='white'%3E%3C/path%3E%3C/svg%3E");
mask-size: 100% 100%;
}
</style>