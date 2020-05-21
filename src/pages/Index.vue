<template>
  <q-page>
    <div class="row wrap justify-around q-mb-md">
      <div class="text-center page-heading">
        <h1>Building next generation web sites and apps with <span class="vuejs">VueJS</span></h1>
      </div>
      <q-img
        alt="Home Logo" src="~assets/laptop.jpg"
        :ratio="16/9" 
        contain
      />
    </div>
    <div padding>
      <div class="row justify-center">
        <h2>Why Use Vue?</h2>
      </div>
      <div>
        <p>Because Vue has learned form the other JavaScript frameworks on the market. Implementing
          their best parts and yet remaining as opinionated as possible. Vue also comes in a variety
          of flavors.
        </p>
        <h3 class="row justify-center">"Flavors, what flavors?"</h3>
        <p>One the benefits of using Vue.js is that there are a variety of ways to build web sites and apps.
        </p>
        <div class="row justify-center">
          <ul class="text-subtitle1">
            <li>Development Speed</li>
            <li>Smaller JavaScript Payload</li>
            <li>Versatile</li>
            <li>Reusability</li>
          </ul>
        </div>
        <div class="row justify-center">
          <q-btn class="services-btn q-mb-sm q-px-xl text-h5 q-mx-xs"  
            color="accent" icon="code"
            to="/services">Services I Provide 
          </q-btn>
          <br><br>
          <!-- <FreeButton   @click="showFreeConsult = true"/>
          <q-dialog v-model="showFreeConsult"> -->
            <FreeConsult />
          <!-- </q-dialog> -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  components:{
    'FreeConsult' : require('components/FreeConsult').default,
    // 'FreeButton' : require('components/FreeButton').default,
  },
  data() {
    return {
      // showFreeConsult: false
    }
  },
}
</script>
<style scoped>
.services-btn{
  min-width: 300px;
  max-width: 350px;
  height: 150px;
}
/* .page-heading{
  position: absolute ;
  z-index: 1;
  top: 380px;
  margin-top: 100px;
  background-color: beige;
  padding: 20px;
  border-radius: 10px;
} */
</style>