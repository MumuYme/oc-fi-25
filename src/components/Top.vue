
<template>  
<div class="justify-items-center w-full">
  <Mainvisual/>
  <LabTop />
  <DepartmentTop />
  <Schedule />
  <!-- <Dialog /> -->
   </div>
</template>

<script>

import Dialog from './Dialog.vue'
import Mainvisual from './Mainvisual.vue'
import LabTop from './LabTop.vue'
import DepartmentTop from './DepartmentTop.vue';
import Schedule from './Schedule.vue';

export default {
  name: 'App',
  components:{
    Dialog,
    Mainvisual,
    LabTop,
    DepartmentTop,
    Schedule
  }
}
</script>