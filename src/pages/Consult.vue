<template>
    <q-page padding >
        <div class="row justify-center q-mb-md">
            <h1>Free Consultation</h1>
        </div>
        <div class="row justify-center q-mt-md">
            <FreeButton   @click="showFreeConsult = true"/>
            <q-dialog v-model="showFreeConsult">
            <FreeConsult />
            </q-dialog>
        </div>
        <div>
            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Eaque quod eligendi dolore aspernatur aperiam corporis recusandae. 
            Quam repellendus, ab natus dolorem culpa quidem quas eius, nihil molestiae 
            deserunt eveniet error!
            </p>
        </div>
    </q-page>
</template>
<script>
export default {
    name: 'PageConsult',
    components: {
        'FreeConsult' : require('components/FreeConsult').default,
        'FreeButton' : require('components/FreeButton').default,
    },
    data() {
        return {
            showFreeConsult: false,
        }
    },
}
</script>