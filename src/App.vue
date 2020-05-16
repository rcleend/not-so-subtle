<template>
    <div id="app">
        <transition name="fade">
            <loader v-if="isLoading" v-bind:isLoading="isLoading"></loader>
            <router-view v-else></router-view>
        </transition>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Loader from '@/components/loader.vue';

    @Component({
        components: {
            Loader,
        },
    })
    export default class App extends Vue {
        public isLoading: boolean = true;
        public showPage: boolean = false;

        public mounted(): void {
            setTimeout(() => {
                this.isLoading = false;
            }, 1000);
        }

    }
</script>

<style lang="scss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
