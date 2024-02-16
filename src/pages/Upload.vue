<script setup>
import Panel from '../components/Panel.vue'

function uploadFile(router, event) {
    if (event) {
        event.preventDefault()
        router.push("/upload/frames")
    }
}

</script>

<template>
    <Panel title="Upload">
        <form id="contentBody">
            <label from="file">Upload file to share</label>
            <input type="file" id="upload" name="file">
            <div id="uploadRow">
                <button @click="uploadFile($router, $event)" id="submit">Upload File</button>
            </div>
        </form>
        <button id="back">
            Back
        </button>
    </Panel>
</template>

<style scoped>
#contentBody {
    position: relative;
    height: 100%;
}

#uploadRow {
    display: flex;
    justify-content: center;
}

#submit {
    max-width: 200px;
}

#back {
    max-width: 150px;
    position: absolute;
    bottom: 0;
    left: 1em;
}
</style>