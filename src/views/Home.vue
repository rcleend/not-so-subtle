<template>
    <div>
        <context-container id="main-logo"></context-container>
    </div>
</template>

<script>
    import {Component, Vue} from 'vue-property-decorator';
    import ContextContainer from "@/components/context-container";

    @Component({
            components: {
                ContextContainer,
            },
        }

    )
    export default class Home extends Vue {
    }
</script>
<style scoped lang="scss">
    #main-logo {
        width: 70px;
    }
</style>
