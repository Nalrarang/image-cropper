<template>
    <div>
        <div class="greeting">Hello {{name}}{{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import { Component, Prop } from 'vue-property-decorator'

    @Component
    export default class HelloComponent extends Vue {
        // props
        @Prop() name!: string
        @Prop() initialEnthusiasm!: number

        //data
        enthusiasm: number = this.initialEnthusiasm
        //computed
        get exclamationMarks(): string {
            return Array(this.enthusiasm + 1).join('!');
        }

        //method
        increment(): void {
            this.enthusiasm++;
        }

        decrement(): void {
            this.enthusiasm--;
        }
    }
</script>

<style>
</style>
