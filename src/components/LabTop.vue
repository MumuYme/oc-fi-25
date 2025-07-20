<template>
    
    <div class="place-self-center w-4/5">
        <p class="text-xl font-bold mt-20">研究室紹介</p><!--どうしようmargin-->
        <div class="flex overflow-x-auto mt-4">
            <div class="flex flex-nowrap">
                <div v-for="lab in $store.state.labs" :key="lab.name" class="shrink-0 md:w-xs w-3xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
                    <a href="#">
                        <img class="rounded-t-lg w-[318px] h-[179px] object-cover" :src="lab.imagePath" alt="" />
                    </a>
                    <div class="p-5 h-auto">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ lab.name }}研究室</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {{ lab.description.length > 30 
                            ? lab.description.slice(0, 30) + '...' 
                            : lab.description  }}</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const Labimg = "/labs/Web工学.svg"
</script>