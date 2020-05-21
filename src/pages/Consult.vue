<template>
    <q-page padding >
        <div class="row justify-center q-mt-md">
            <!-- <FreeButton   @click="showFreeConsult = true"/>
            <q-dialog v-model="showFreeConsult"> -->
            <FreeConsult />
            <!-- </q-dialog> -->
        </div>
        <div class="row justify-center q-mt-md">
            <p>I am always up for a new challenge. So hit me up and lets set up your free consultation today.
            </p>
        </div>
    </q-page>
</template>
<script>
export default {
    name: 'PageConsult',
    components: {
        'FreeConsult' : require('components/FreeConsult').default,
        // 'FreeButton' : require('components/FreeButton').default,
    },
    data() {
        return {
            showFreeConsult: false,
        }
    },
}
</script>