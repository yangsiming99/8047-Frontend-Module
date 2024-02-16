<script setup>
defineProps({
    title: String,
})

</script>

<template>
    <article>
        <header><b>{{ title }}</b></header>
        <slot />
    </article>
</template>

<style scoped>
    article{
        color: black;
        min-height: 600px;
        position: relative;
    }
</style>