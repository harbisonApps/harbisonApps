<template>
    <q-page padding>
        <div class="row justify-center q-mb-md">
            <h1>About</h1>
        </div>
        <div>
            <p class="lead">I have built over 70 websites (most are defunct) for over 20 years.
            </p>
            <p>From static HTML sites, as well as ones built with CMS platforms; to 
                dynamic projects build with .NET, Angular, and Vue. Vue, as well as Nuxt and 
                Quasar are my go to for new or rebuilding websites.</p>
            
        </div>
        <div class="text-center q-mt-md">
            <FreeButton   @click="showFreeConsult = true"/>
            <q-dialog v-model="showFreeConsult">
                <FreeConsult />
            </q-dialog>
            <br>
            <a href='https://ko-fi.com/E1E01LQUA' target='_blank'><img height='36' 
            style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi5.png?v=2' 
            border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
        </div>
    </q-page>
</template>
<script>
export default {
    name: 'PageAbout',
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