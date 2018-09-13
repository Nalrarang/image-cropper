import Vue from 'vue'
import ImageCropper from './components/ImageCropper.vue'

new Vue({
    el: '#app',
    template:
        `<div>
            <image-cropper></image-cropper>           
        </div>`,
    data: {
        name: 'World'
    },
    components: {
        ImageCropper
    }
})


