<template>
    <q-page padding>
        <div class="row justify-center q-mb-md">
            <h1>About</h1>
        </div>
        <div class="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Eaque quod eligendi dolore aspernatur aperiam corporis recusandae. 
            Quam repellendus, ab natus dolorem culpa quidem quas eius, nihil molestiae 
            deserunt eveniet error!
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