<template>
    
    <div class="w-4/5" id="lab">
        <p  class="font-kiwi text-2xl font-semibold mt-20">研究室紹介</p><!--どうしようmargin-->
        <div class="flex overflow-x-auto mt-4">
            <div class="flex flex-nowrap">
                <div v-for="lab in $store.state.labs" :key="lab.name" class="p-2 shrink-0 md:w-xs w-3xs backdrop-blur-sm bg-white/30 border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800/30 dark:border-gray-700 m-3 flex flex-col">
  
                <div @click="openModle(lab)" data-modal-target="01" data-modal-toggle="01">
                    <img class="rounded-t-lg w-[318px] h-[179px] object-cover" :src="lab.imagePath" alt="" />
                </div>

                <div class="pt-3 px-2 h-auto flex flex-col flex-grow justify-between">
                    
                    <div>
                    <div @click="openModle(lab)" data-modal-target="01" data-modal-toggle="01">
                        <p class="mb-2 min-h-[3rem] font-kiwi text-base whitespace-pre-line font-semibold tracking-tight text-gray-900 dark:text-white">{{ lab.name }}</p>
                    </div>
                    <p class="mb-3 font-kiwi text-base text-gray-700 dark:text-gray-400 overflow-hidden line-clamp-3">
                        {{ lab.description }}
                    </p>
                    </div>

                    <button @click="openModle(lab)" data-modal-target="01" data-modal-toggle="01" class="self-center inline-flex justify-end font-lora items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ...">
                    <p>Read more</p>
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>

    <Dialog :lab="selectedLab" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import Dialog from './Dialog.vue'

// Flowbiteの機能を有効にするために必須
onMounted(() => {
  initFlowbite();
});

;
const selectedLab = ref(null);
function openModle(lab){
selectedLab.value = lab;
}

</script>