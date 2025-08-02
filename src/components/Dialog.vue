<template>

<!-- Main modal -->
<div id="01" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full bg-gray-900/50 backdrop-blur-sm" ><!--class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/30 backdrop-blur-md"-->
    
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white/40 backdrop-blur-xl rounded-lg shadow-sm">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-blue-200">
                <div>
                    <h3 class="text-xl font-kiwi font-medium  text-blue-100">
                        {{ lab?.name }}
                    </h3>
                    <div class="flex items-center">
                        <MapPinIcon class="h-6 w-6 text-white" />
                        <p class="font-kiwi text-white">{{ lab?.place }}</p>
                    </div>
                </div>
                <button type="button" data-modal-hide="01" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <p class="mb-2.5 font-kiwi text-lg leading-relaxed text-blue-100">研究内容</p>
                <p class="text-base leading-relaxed font-kiwi text-white" >
                    {{ lab?.description }}
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-end p-4 md:p-5 border-t border-blue-200 rounded-b ">
                
                    <button  @click="openMap(lab)" type="button" class="text-white border-2 border-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        <div class="flex items-center font-kiwi">
                            <MapIcon class="h-6 w-6 text-white" />
                        地図</div>
                    </button>
                
            </div>
        </div>
    </div>
</div>

<!-- 地図モーダル -->
<div v-if="showMap" @click.self="closeMap" class="fixed z-[999] top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center">
  <div class="relative max-w-3xl w-[90%]">
    <img :src="selectedLab?.mapimg" alt="Map Image" class="w-full h-auto rounded-lg shadow-lg border border-white">
    <button @click="closeMap"
      class="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/80 rounded-full p-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>
</div>


</template>

<script setup>
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import { MapIcon, MapPinIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  lab:Object,
})

// onMountedフックを使って、コンポーネントがマウントされた後に
// FlowbiteのJavaScriptを初期化します。
onMounted(() => {
    initFlowbite();
})

const showMap = ref(false)
const selectedLab = ref(null)

const openMap = (labData) => {
  selectedLab.value = labData
  showMap.value = true
}

const closeMap = () => {
  showMap.value = false
  selectedLab.value = null
}
</script>