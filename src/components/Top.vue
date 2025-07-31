<template>  
<div class="flex flex-col items-center">
  <Mainvisual/>
  <LabTop />
  <DepartmentTop />
  <Schedule />
   </div>
</template>

<script>
import Mainvisual from './Mainvisual.vue'
import LabTop from './LabTop.vue'
import DepartmentTop from './DepartmentTop.vue';
import Schedule from './Schedule.vue';

export default {
  name: 'App',
  components:{
    Mainvisual,
    LabTop,
    DepartmentTop,
    Schedule
  }
}
</script>