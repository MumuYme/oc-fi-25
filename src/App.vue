

<template>  
  
    <div id="app">
      <PasswardGate>
      <navigation />
      <router-view />
      </PasswardGate>
    </div>
  
</template>

<script>
import navigation from './components/navigation.vue'
import PasswardGate from './components/PasswardGate.vue';
export default {
  name: 'App',
  components:{
    navigation,
    PasswardGate
  }
}
</script>
