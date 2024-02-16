<script setup>
import Panel from '../components/Panel.vue';

const options = [
    `/src/assets/frames/image1.bmp`,
    "/src/assets/frames/image2.bmp",
    "/src/assets/frames/image3.bmp",
]

function selectImage(router, event) {
    if (event) {
        event.preventDefault()
        router.push("/upload/complete")
    }
}

</script>

<template>
    <Panel title="Select a frame">
        <h3>Select a frame</h3>
        <div class="frameContainer">
            <div v-for="option in options">
                <img v-bind:src="option" class="frameOption" />
                <button @click="selectImage($router, $event)">Select</button>
            </div>
        </div>
    </Panel>
</template>

<style scoped>
.frameOption {
    max-width: 15em;
    max-height: 15em;
    margin-bottom: 0.5em;
}

.frameContainer {
    display: flex;
    justify-content: space-around;
}
</style>