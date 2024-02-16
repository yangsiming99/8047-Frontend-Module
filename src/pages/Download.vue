<script setup>
import { ref } from 'vue';
import Panel from '../components/Panel.vue';

const uploading = ref(false)

function uploadKey(router, event) {
    if (event) {
        event.preventDefault()
        router.push("/download/complete")
    }
}

</script>

<template>
    <Panel title="Download">
        <form id="contentBody">
            <label for="file">Upload Key File</label>
            <input type="file" id="file" name="file">
            <div id="uploadRow">
                <button @click="uploadKey($router, $event)" id="submit">Upload Key</button>
            </div>
        </form>
        <button id="back" @click="$router.push('/')">
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