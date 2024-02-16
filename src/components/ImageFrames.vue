<script setup>
const props = defineProps({
    options: Array,
})

console.log(props.options)

</script>

<template>
    <div v-for="option in options">
        <img v-bind:src="option" />
    </div>
</template>

<style scoped></style>