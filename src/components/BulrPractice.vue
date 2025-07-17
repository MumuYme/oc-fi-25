<template>
    <div 
    v-for="(opacity, oIndex) in opacities"
    :key="oIndex"
    class="flex flex-wrap">
        <div
        v-for="(blur, index) in blurs"
        :key="`${oIndex}-${index}`"
        class="bg-[url(/hz.jpg)] m-3 p-2 bg-cover"
        >
            <div :class="`bg-white/${opacity} ${blur} p-8`">
                <p>あああ</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Bulr',
    data(){
        return{
            blurs: [
        'backdrop-blur-none',
        'backdrop-blur-xs',
        'backdrop-blur-sm',
        'backdrop-blur-md',
        'backdrop-blur-lg',
        'backdrop-blur-xl',
        'backdrop-blur-2xl',
        'backdrop-blur-3xl',
      ],
        opacities:[
            '10',
            '30',
            '50',
            '70',
            '90',
        ]
        }
    }
}
</script>