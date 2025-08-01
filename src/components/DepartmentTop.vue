

<template>  
  <div class="w-4/5 mt-20">
    <p class="font-zen-maru-gothic text-4xl font-bold text-blue-600 text-center text-shadow-lg/70 text-shadow-blue-200 mb-5">学科紹介</p><!--どうしようmargin-->
    <div class="p-5 rounded-2xl bg-white/20 backdrop-blur-xl">
    <p class="font-kiwi font-normal mb-3">未来科学部情報メディア学科（通称FI科：School of Science and Technology for Future Life, Department of Information Systems and Multimedia Design）では、ITサービスを研究・開発するために必要とされるコンピュータサイエンスと、多様性の時代に求められる創造力、表現力、感性を養うデジタルメディア技術について学ぶことができます。</p>
    
      <LiquidGlassButton
                    :width="300"
                    :height="40"
                    :borderRadius="28"
                    :innerShadowColor="'#93c5fd'"
                    :innerShadowBlur="26"
                    :innerShadowSpread="-12"
                    :glassTintColor="'#ffffff'"
                    :glassTintOpacity="0"
                    :frostBlurRadius="0"
                    :noiseFrequency="0.008"
                    :noiseStrength="77"
                    
                     @click="navigateToAbout"
                    >
                    <p class="text-blue-700 font-semibold">Read more</p>
        </LiquidGlassButton>
  </div>
  </div> 
</template>

<script setup>
import { useRouter } from 'vue-router'; // useRouter をインポート
import { LiquidGlassLink, LiquidGlassButton, LiquidGlassContainer } from '@tinymomentum/liquid-glass-vue'
const router = useRouter(); // router インスタンスを取得

const navigateToAbout = () => {
  // router-link の :to="`/about`" と同じ
  router.push('/department');
}
</script>