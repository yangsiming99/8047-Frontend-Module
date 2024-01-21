<script setup>
defineProps({
    title: String,
})

</script>

<template>
    <v-card id="card">
        <h3>{{ title }}</h3>
        <slot />
    </v-card>
</template>

<style scoped>
    #card {
        width: 70vw;
        height: 60vh;
        padding: 1.5em;
    }
</style>