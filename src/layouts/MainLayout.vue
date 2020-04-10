<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title class="absolute-center">
          Harbison Apps
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="190"
      :breakpoint="1025"
      bordered
      content-class="bg-secondary text-black"
    >
      <q-list>
        
        <q-item-label header
          class="text-white text-caption text-weight-light">
          Version {{appVersion }}
        </q-item-label>
        <q-item-label
          header
          class="text-white text-h5"
        >
          Essentials
        </q-item-label>
        <q-item v-for="nav in navs"
          :key="nav.label"
          exact
          class="text-white"
          clickable
          :to="nav.to">
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  components: {
   
  },

  data () {
    return {
      leftDrawerOpen: false,
      appVersion: '0.5.0',
      navs: [
        { to: "/", icon: "home", label: "Home" },
        { to: "/about", icon: "info", label: "About" },
        { to: "/services", icon: "web", label: "Services" },
        { to: "/free", icon: "mail_outline", label: "Free Consult" },
      ],
      loggedIn: false
    }
  }
}
</script>
<style scoped>

</style>