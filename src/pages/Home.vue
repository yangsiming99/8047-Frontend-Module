<script setup>
import Panel from '../components/Panel.vue';
</script>

<template>
    <Panel title='Home'>
        <div class='grid'>
            <div class="halfDiv">
                <vue-feather class="icon" size="200" type="upload"></vue-feather>
                <button @click="$router.push('/upload')">Upload</button>
            </div>
            <div class="halfDiv">
                <vue-feather class="icon" size="200" type="download"></vue-feather>
                <button @click="$router.push('/download')">Download</button>
            </div>
        </div>
    </Panel>
</template>

<style scoped>
.halfDiv {
    height: 450px;
    width: 100%;
    margin-top: 3em;
}
</style>