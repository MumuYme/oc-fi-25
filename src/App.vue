

<template>  
  
    <div id="app">
      <P5Background />
      <PasswardGate>
      <navigation />
      <router-view />
      <Footer />
      </PasswardGate>
    </div>
  
</template>

<script>
import navigation from './components/navigation.vue'
import PasswardGate from './components/PasswardGate.vue';
import P5Background from './components/P5Background.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components:{
    navigation,
    PasswardGate,
    P5Background,
    Footer
  }
}
</script>
