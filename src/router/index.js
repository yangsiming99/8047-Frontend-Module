import {createWebHistory, createRouter} from "vue-router"
import Home from "../pages/Home.vue"
import TestAbout from "../pages/TestAbout.vue"
import Download from "../pages/Download.vue"
import DownloadFailed from "../pages/DownloadFail.vue"
import DownloadComplete from "../pages/DownloadComplete.vue"

import Upload from "../pages/Upload.vue"
import UploadFrames from "../pages/UploadFrames.vue"
import UploadComplete from "../pages/UploadComplete.vue"

const routes = [
    { path: "/", component: Home},
    { path: "/about", component: TestAbout},
    { path: "/download", component: Download},
    { path: "/download/failed", component: DownloadFailed},
    { path: "/download/complete", component: DownloadComplete},

    { path: "/upload", component: Upload},
    { path: "/upload/frames", component: UploadFrames},
    { path: "/upload/frames", component: UploadFrames},
    { path: "/upload/complete", component: UploadComplete},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;