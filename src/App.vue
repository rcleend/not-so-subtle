<template>
    <div id="app">
        <loading v-if="true"></loading>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Loading from '@/components/loading.vue';

    @Component({
        components: {
            Loading,
        },
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
</style>
