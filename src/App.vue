<script setup>
import BaseButton from './components/base-button.vue';
import Collection from './assets/collection.svg'
import Share from './assets/share.svg'
</script>

<template>
    <div class="app">
        <header class="app__header">
            <h1 class="app__title title title_big">День дня</h1>
        </header>
        <main>
            <router-view></router-view>
        </main>
        <footer class="app__footer">
            <base-button :title="'Поделиться'" :icon="Share"/>
        </footer>
    </div>
</template>

<style lang="scss">
@import "style.scss";

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__header {
        margin-top: 52px;
    }

    &__footer {
        z-index: 1000;
        position: fixed;
        bottom: 52px;
    }
}
</style>
