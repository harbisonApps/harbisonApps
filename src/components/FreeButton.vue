<template>
    <q-btn class="freeConsultBtn q-mb-md text-h5" 
      icon="calendar_today" outline color="secondary" 
      @click="$emit('click')">
        Schedule your free consultaion today
      <q-tooltip content-class="tooltip" content-style="font-size: 16px" :offset="[10, 10]">
        Get your free consultaion today
      </q-tooltip>
    </q-btn>
</template>
<script>
export default {
    name: 'freeBtn'
    
}
</script>
<style scoped>
.freeConsultBtn{
  min-width: 300px;
  max-width: 400px;
  height: 150px;
}
</style>