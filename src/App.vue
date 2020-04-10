<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
a{
    color: #166c7d;
  }
  p{
    font-size: 16px;
    text-indent: 8px;
  }
  h1{
  font-size: 2rem;
  line-height: 2rem;
  font-weight: 300;
}
h2{
  font-size: 1.8rem;
  line-height: 1.8rem;
  font-weight: 500;
}
h3{
  font-size: 2rem;
  line-height: 2rem;
}
li{
  /* list-style: none; */
  font-style: italic;
  font-size: 18px;
}

.q-item__label{
	font-size: 15px
}
.vuejs{
  color: #327a5a;
}
.tooltip{
  color:#fff;
  background:  #327a5a;
}
.lead{
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  text-indent: 8px;
}
</style>