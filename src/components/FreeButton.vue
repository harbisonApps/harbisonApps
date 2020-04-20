<template>
    <q-btn class="freeConsultBtn q-mb-md text-h5" 
      icon="calendar_today" outline color="secondary" 
      @click="$emit('click')">
      Schedule your free consultation today
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
  max-width: 350px;
  height: 150px;
}
</style>