<template>
    <q-page padding>
        <div class="row justify-center q-mb-md">
            <h1>Services</h1>
        </div>
        <div>
            <p class="lead">From dynamic web apps and static sites, to adding features to your website; I will give
                you what you need to improve your web presence.
            </p>
        </div>
        <div>
            <q-separator/>
            <q-tabs
                v-model="tab"
                active-color="secondary"
                indicator-color="secondary"
                align="justify" indicator
            >
                <q-tab name="vuejs"  alert="primary" label="vuejs"/>
                <q-tab name="static_sites" label="static sites"/>
                <q-tab name="javascript" label="javascript"/>
            </q-tabs>
            <q-separator/>
            <q-tab-panels v-model="tab" keep-alive
                animated swipeable infinite>
                <q-tab-panel name="vuejs">
                    <div>
                        <q-carousel
                            v-model="slide"
                            swipeable
                            animated
                            navigation-position="right"
                            navigation
                            control-color="teal-5"
                            height="500px"
                            padding
                            class="text-black rounded-borders"
                            >
                            <q-carousel-slide name="vue_slide" class="flex-center">
                                <div>
                                    <span class="row no-wrap flex-center q-mb-sm">
                                        <q-img class="q-mr-md"
                                            src="~assets/vue_logo.png"
                                            style="height: 100px; width: 100px" />
                                        <h2 class="vue">Vue</h2>
                                    </span>
                                    <p class="lead">Vue (pronounced /vjuː/, like view) is a progressive javascript framework for 
                                        building user applications.                                        
                                    </p>
                                    <p><span class="vue">Vue</span> is very flexible. It can be used to create a single component, to be included in another
                                        project or build an entire website / app. It uses a single file for each component, 
                                        with specific sections for HTML, CSS, and JavaScript. One of my favorite aspects of Vue is 
                                        that it is not backed by a larger entity like React (Facebook) or Angular (Google) are.
                                    </p>
                                    <div class="row wrap flex-center">
                                        <h5 class="column wrap flex-center">Features</h5>
                                        <ul>
                                            <li>Fast Development</li>
                                            <li>Tiny JavaScript Payload</li>
                                            <li>Versatile</li>
                                            <li>Reusability</li>
                                        </ul>
                                        <q-img class="q-ml-md"
                                            spinner-color="white"
                                            src="../statics/Astro_Vuejs.png"
                                            style="height: 200px; width: 200px" />
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide name="nuxt_slide" class="no-wrap flex-center">
                                <div>
                                    <span class="row no-wrap flex-center q-mb-sm">
                                        <q-img class="q-mr-md"
                                            spinner-color="white"
                                            src="~assets/nuxt_logo.png"
                                            style="height: 100px; width: 100px" />
                                        <h2 class="nuxt">Nuxt</h2>
                                    </span>
                                    <p class="lead"><span class="nuxt">Nuxt</span> is based on a powerful modular architecture.
                                    </p>
                                    <p>With Nuxt.js, applications are optimized out of the box. Unlike Vue, React, and Angular;
                                        Nuxt comes with routing and code-splitting built in. SSR (Server Side Rendering) in Nuxt 
                                        makes SEO easy.
                                    </p>
                                    <div class="row wrap flex-center">
                                        <h5 class="column wrap flex-center">Features</h5>
                                        <ul>
                                            <li>Automatic Code Splitting</li>
                                            <li>Tiny JavaScript Payload 
                                                <br>
                                                (57kB min+gzip)
                                            </li>
                                            <li>Server-Side Rendering</li>
                                            <li>Built-in Routing System with Asynchronous Data</li>
                                        </ul>
                                    </div>
                                </div>
                            </q-carousel-slide>
                            <q-carousel-slide name="quasar_slide" class=" no-wrap flex-center">
                                <div>
                                    <span class="row no-wrap flex-center q-mb-sm">
                                        <q-img class="q-mr-md"
                                            src="~assets/quasar_logo.png"
                                            style="height: 100px; width: 100px" />
                                        <h2 class="quasar">Quasar</h2>
                                    </span>
                                    <p class="lead">Quasar (pronounced ˈkweɪ.zɑɹ') is an MIT licensed open-source 
                                        Vue.js based framework.
                                    </p>
                                    <p><span class="quasar">Quasar</span> is built on top of VueJs and makes building websites and apps
                                        fast and easy. You get a state of the art UI that follows Material Guidelines. Great support 
                                        for desktop, as well as mobile browsers, including iOS Safari. 
                                        Quasar is an excellent solution based on Vue whether you’re 
                                        only building a desktop website, a desktop app or a mobile app, or all of them.
                                    </p>
                                    <div class="row wrap flex-center">
                                        <h5>The many flavors of Quasar</h5>
                                        <ul>
                                            <li>SPAs ( Single Page App )</li>
                                            <li>SSR ( Server-side Rendered App )
                                                <br>
                                               + ( optional PWA client takeover )
                                            </li>
                                            <li>PWAs ( Progressive Web App )</li>
                                            <li>Mobile Apps ( Android, iOS, … )
                                                <br>
                                                using Cordova or Capacitor
                                            </li>
                                            <li>Multi-platform Desktop Apps
                                                <br>
                                                ( using Electron )
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </q-carousel-slide>
                        </q-carousel>
                    </div>
                </q-tab-panel>
                <q-tab-panel name="static_sites">
                    <div>
                        <h2>Static Sites</h2>
                        <p>A static website contains Web pages with fixed content. Each page is coded in 
                            HTML and displays the same information to every visitor. Static sites are the 
                            most basic type of website and are the easiest to create. Unlike dynamic websites, 
                            they do not require a programming language or database.
                        </p>
                        <p>Next paragraph</p>
                    </div>
                </q-tab-panel>
                <q-tab-panel name="javascript">
                    <div>
                        <h2>Javascript</h2>
                        <p class="lead">Are you looking to add a new feature to your existing web site? Chances are 
                            that it's javascript is involved.
                        </p>
                    </div>
                </q-tab-panel>
            </q-tab-panels>
            <q-separator/>
        </div>
        <div class="text-center q-mt-md">
            <FreeButton   @click="showFreeConsult = true"/>
            <q-dialog v-model="showFreeConsult">
                <FreeConsult />
            </q-dialog>
        </div>
    </q-page>
</template>
<script>
export default {
    name: 'PageServices',
    components:{
    'FreeConsult' : require('components/FreeConsult').default,
    'FreeButton' : require('components/FreeButton').default,
    },
    data() {
        return {
        showFreeConsult: false,
        tab: 'vuejs',
        tab_vue: 'vuejs_sub',
        slide: 'vue_slide'
        }
    },
}
</script>
<style scoped>
/* .carousel-height{
    min-height: 200px;
    max-height: 500px
} */
.quasar{
    color: blue;
    font-weight: 500;
    /* text-decoration-line: underline; */
}
.vue{
    color: #327a5a;
    font-weight: 500;
}
.nuxt{
    color: #304455;
    font-weight: 500;
}
</style>