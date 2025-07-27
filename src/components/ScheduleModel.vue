<template>
<!-- Main modal -->
<div id="schedule-modle" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full bg-gray-900/50 backdrop-blur-sm" ><!--class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/30 backdrop-blur-md"-->
    
    <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white/40 backdrop-blur-xl rounded-lg shadow-sm dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <div>
                    <h3 class="font-kiwi text-xl font-semibold  text-white dark:text-white">
                            {{ ScheduleEvent?.title }}
                    </h3>
                    <div class="flex items-center">
                    <MapPinIcon class="h-6 w-6 text-white" />
                    <p class="text-white font-kiwi">{{ ScheduleEvent?.place }}</p>
                    </div>
                </div>
                <button type="button" data-modal-hide="schedule-modle" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
                <p class="mb-2.5 text-lg leading-relaxed font-kiwi text-white dark:text-gray-400">タイムスケジュール</p>
                <p class="text-base leading-relaxed text-white font-kiwi dark:text-gray-400" >
                    {{ ScheduleEvent?.description }}
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="01" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <div class="flex font-kiwi items-center">
                          <MapIcon class="h-6 w-6 text-white" />
                      地図</div>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import { MapPinIcon,MapIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  ScheduleEvent:Object,
})

// onMountedフックを使って、コンポーネントがマウントされた後に
// FlowbiteのJavaScriptを初期化します。
onMounted(() => {
    initFlowbite();
})
</script>