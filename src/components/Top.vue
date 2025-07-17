
<template>  
  <Mainvisual/>
  <LabTop />
  <Dialog />
</template>

<script>

import Dialog from './Dialog.vue'
import Mainvisual from './Mainvisual.vue'
import LabTop from './LabTop.vue'

export default {
  name: 'App',
  components:{
    Dialog,
    Mainvisual,
    LabTop
  }
}
</script>