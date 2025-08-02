<template>
    <div id="schedule" class="w-4/5 mt-20">
        <p  class="font-zen-maru-gothic text-4xl font-bold text-blue-600 text-center text-shadow-lg/70 text-shadow-blue-200 mb-6">スケジュール</p>      
        <div class="p-5 rounded-2xl bg-gradient-to-tl from-blue-500/20 from- via-blue-300/20 via- backdrop-blur-xl">  
        <ol class="relative border-s border-blue-800">                  
            <li  v-for="(events, hour) in schedules" :key="hour" class="ms-4 font-kiwi">
                <div class="absolute w-3 h-3 bg-blue-800 rounded-full mt-1.5 -start-1.5 border-3 border-blue-800 "></div>
                <time class="mb-1 text-sm font-normal leading-none text-blue-800 ">{{ hour }}</time>
                <!-- <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p> -->
                <div class="overflow-auto flex flex-nowrap items-baselin pt-4 pb-7">
                    <button @click="openModle(event)"  data-modal-target="schedule-modle" data-modal-toggle="schedule-modle" v-for="(event, eventId) in events" :key="eventId" :class=event.margin class="backdrop-blur-sm drop-shadow-md shrink-0 inline-flex items-center px-4 py-2 mx-3 text-sm font-medium text-gray-900 bg-white/90 border border-gray-200 rounded-lg hover:bg-gray-100/30 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700">{{ event.title }}<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg></button>
                    <!-- <a href="#" class="mt-3 shrink-0 inline-flex items-center px-4 py-2 mx-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">入試ガイダンス<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg></a>di
                    <a href="#" class="shrink-0 inline-flex items-center px-4 py-2 mx-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">入試対策<svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg></a> -->
                </div>
            </li>
            <!-- <li class="ms-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">13:00</time>
            </li> -->
        </ol>
        </div>
    </div>
    <ScheduleModel :ScheduleEvent="selectedEvent" />
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex'; // or your Pinia store
import { initFlowbite } from 'flowbite';
import ScheduleModel from './ScheduleModel.vue';

const store = useStore();

// ストアからschedulesオブジェクトを取得
const schedules = computed(() => store.state.schedules);

// Flowbiteの機能を有効にするために必須
onMounted(() => {
  initFlowbite();
});


const selectedEvent = ref(null);
function openModle(event){
    console.log('1. ボタンがクリックされました。渡すデータ:', event); 
selectedEvent.value = event;
}
</script>