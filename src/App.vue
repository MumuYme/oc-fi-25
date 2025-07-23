

<template>  
  
    <div id="app">
      <PasswordGate>
      <navigation />
      <router-view />
      </PasswordGate>
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
