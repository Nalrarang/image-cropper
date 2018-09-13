<template>
    <div class="crop-wrap">
        <h2>이미지 업로드</h2>
        <croppa v-model="myCroppa"></croppa>


    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator'
    import { Croppa } from 'vue-croppa'

    @Component
    export default class ImageCropper extends Vue {
        // props
        //data
        initData : number = 10
        //computed
        //method
    }    
</script>
<style></style>