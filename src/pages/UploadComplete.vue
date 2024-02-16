<script setup>
import Panel from '../components/Panel.vue';
</script>

<template>
    <Panel title="Upload Complete">
        <h1>Upload Complete</h1>
        <div class="keyContainer">
            <div class="keyImage">
                yes
            </div>
        </div>
        <button @click="$router.push('/')" class="back">Complete</button>
    </Panel>
</template>

<style scoped>
.keyContainer {
    display: grid;
    justify-content: center;
    margin: 1em;
}

.keyImage {
    background-color: brown;
    width: 400px;
    height: 400px;
    text-align: center;
}

.back {
    max-width: 150px;
    position: absolute;
    bottom: 0;
    left: 1em;
    padding: 5px;
}
</style>