<template>
  <q-page padding>
    <div class="row wrap justify-around q-mb-md">
      <div class="text-center">
        <h1>Building next generation web sites and apps with <span class="vuejs">VueJS</span></h1>
      </div>
      <q-img
        alt="Home Logo" src="~assets/laptop.jpg"
        :ratio="16/9" 
        contain
      />
    </div>
    <div class="row justify-center">
      <h2>Why Use Vue?</h2>
    </div>
    <div>
      <p>Because Vue has learned form the other JavaScript frameworks on the market. Implementing
        their best parts and yet remaining as opinionated as possible. Vue also comes in a variety
        of flavors.
      </p>
      <h3 class="row justify-center">"Flavors, what flavors?"</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati! Reiciendis 
        nulla ipsa vel quam aut, fuga culpa dolores expedita molestiae reprehenderit omnis! Iste, 
        repellat velit quaerat reiciendis voluptatibus corrupti.
      </p>
      <div class="row justify-center">
        <ul class="text-subtitle1">
          <li>Development Speed</li>
          <li>Smaller JavaScript Payload</li>
          <li>Versitile</li>
          <li>Reuseability</li>
        </ul>
      </div>
      <div class="text-center">
        <FreeButton   @click="showFreeConsult = true"/>
        <br>
        <q-btn color="primary" to="/services">
          Services
          <q-tooltip content-class="tooltip" content-style="font-size: 16px" :offset="[10, 10]">
            Servives I provide
          </q-tooltip>
        </q-btn>
        <q-dialog v-model="showFreeConsult">
          <FreeConsult />
        </q-dialog>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components:{
    'FreeConsult' : require('components/FreeConsult').default,
    'FreeButton' : require('components/FreeButton').default,
  },
  data() {
    return {
      showFreeConsult: false
    }
  },
}
</script>
<style scoped>
</style>